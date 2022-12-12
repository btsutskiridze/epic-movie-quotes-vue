<script setup>
import MoviesIcon from "@/components/icons/news-feed/MoviesIcon.vue";
import HomeIcon from "@/components/icons/news-feed/HomeIcon.vue";
import LogoutIcon from "@/components/icons/news-feed/LogoutIcon.vue";
import BurgerMenu from "@/components/icons/news-feed/BurgerMenuIcon.vue";

import { computed, ref } from "vue";
import { useAuthStore } from "@/stores/useAuthStore";
import axios from "@/config/axios/authAxios.js";
import router from "@/router/index.js";
import { useRouter } from "vue-router";

import { useUserStore } from "@/stores/useUserStore";
const user = computed(() => useUserStore().user);
const showMenu = ref(false);
const routePath = ref(useRouter().currentRoute.value.path);

const closeMenu = (e) => {
  if (e.target == document.getElementById("container")) showMenu.value = false;
};

const authStore = useAuthStore();
const handleLogout = async () => {
  try {
    await axios.get("logout");
    authStore.authenticated = false;
    router.push({ name: "news-feed" });
  } catch (err) {
    console.log(err);
  }

  router.push({ name: "landing" });
};
</script>

<template>
  <burger-menu
    class="relative block cursor-pointer font-bold uppercase lg:hidden"
    @click="showMenu = !showMenu"
  />

  <div
    v-if="showMenu"
    @click="closeMenu"
    id="container"
    class="fixed top-0 left-0 z-30 block h-screen w-screen cursor-default backdrop-blur-sm lg:hidden"
  >
    <div
      class="absolute top-0 left-0 z-40 h-[80vh] w-[80vw] rounded-lg bg-[#0D0C15] pt-10 pl-10"
    >
      <ul class="flex flex-col gap-8">
        <div class="flex flex-row gap-4">
          <img
            :src="useUserStore().user?.avatar"
            alt="avatar"
            class="h-10 w-10 rounded-full object-cover"
            :class="
              routePath.includes('user-profile')
                ? 'outline outline-2 -outline-offset-1 outline-[#E31221]'
                : ''
            "
          />
          <div>
            <h1>{{ user.name }}</h1>
            <p
              class="cursor-pointer text-sm text-gray-400"
              @click="$router.push({ name: 'user-profile' })"
            >
              {{ $t("newsFeed.edit_your_profile") }}
            </p>
          </div>
        </div>
        <router-link
          :to="{ name: 'news-feed' }"
          class="flex cursor-pointer flex-row gap-3"
        >
          <home-icon />
          <h1>{{ $t("newsFeed.news_feed") }}</h1>
        </router-link>
        <router-link
          :to="{ name: 'all-movies' }"
          class="flex cursor-pointer flex-row gap-3"
        >
          <movies-icon />
          <h1>{{ $t("newsFeed.list_of_movies") }}</h1>
        </router-link>
        <div
          class="flex cursor-pointer flex-row gap-3 md:hidden"
          @click="handleLogout"
        >
          <logout-icon />
          <h1>{{ $t("newsFeed.logout") }}</h1>
        </div>
      </ul>
    </div>
  </div>
</template>
