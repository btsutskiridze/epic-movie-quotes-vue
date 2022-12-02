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
    const response = await axios.get("logout");
    authStore.authenticated = false;
    router.push({ name: "news-feed" });

    console.log(response);
  } catch (err) {
    console.log(err);
  }

  router.push({ name: "landing" });
};
</script>

<template>
  <burger-menu
    class="font-bold uppercase block md:hidden relative cursor-pointer"
    @click="showMenu = !showMenu"
  />

  <div
    v-if="showMenu"
    @click="closeMenu"
    id="container"
    class="cursor-default w-screen h-screen top-0 left-0 backdrop-blur-sm z-30 fixed block md:hidden"
  >
    <div
      class="absolute top-0 left-0 bg-[#0D0C15] w-[80vw] h-[80vh] z-40 pt-10 pl-10 rounded-lg"
    >
      <ul class="flex flex-col gap-8">
        <div class="flex flex-row gap-4">
          <img
            src="@/assets/images/news-feed/avatar-2.png"
            alt="avatar"
            width="40"
            height="40"
            class="rounded-full"
            :class="
              routePath.includes('user-profile')
                ? 'outline outline-2 -outline-offset-1 outline-[#E31221]'
                : ''
            "
          />
          <div>
            <h1>{{ user.name }}</h1>
            <p
              class="text-gray-400 text-sm cursor-pointer"
              @click="$router.push({ name: 'user-profile' })"
            >
              {{ $t("newsFeed.edit_your_profile") }}
            </p>
          </div>
        </div>
        <router-link
          :to="{ name: 'news-feed' }"
          class="flex flex-row gap-3 cursor-pointer"
        >
          <home-icon />
          <h1>{{ $t("newsFeed.news_feed") }}</h1>
        </router-link>
        <router-link
          :to="{ name: 'all-movies' }"
          class="flex flex-row gap-3 cursor-pointer"
        >
          <movies-icon />
          <h1>{{ $t("newsFeed.list_of_movies") }}</h1>
        </router-link>
        <div class="flex flex-row gap-3 cursor-pointer" @click="handleLogout">
          <logout-icon />
          <h1>{{ $t("newsFeed.logout") }}</h1>
        </div>
      </ul>
    </div>
  </div>
</template>
