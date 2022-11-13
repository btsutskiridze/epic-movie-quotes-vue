<script setup>
import MoviesIcon from "@/components/icons/news-feed/MoviesIcon.vue";
import HomeIcon from "@/components/icons/news-feed/HomeIcon.vue";
import LogoutIcon from "@/components/icons/news-feed/LogoutIcon.vue";
import BurgerMenu from "@/components/icons/news-feed/BurgerMenuIcon.vue";

import { ref } from "vue";
import { deleteJwtToken } from "@/helpers/jwt";
import router from "@/router/index.js";

const showMenu = ref(false);

const closeMenu = (e) => {
  if (e.target == document.getElementById("container")) showMenu.value = false;
};

const handleLogout = () => {
  deleteJwtToken("jwt_token", "/", import.meta.VITE_DOMAIN);
  router.push({ name: "home" });
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
    class="w-screen h-screen top-0 left-0 backdrop-blur-sm z-30 fixed block md:hidden"
  >
    <div
      class="absolute top-0 left-0 bg-[#0D0C15] w-[80vw] h-[80vh] z-40 pt-10 pl-10 rounded-lg"
    >
      <ul class="flex flex-col gap-8">
        <div class="flex flex-row gap-4">
          <img
            src="@/assets/images/news-feed/avatar.png"
            alt="avatar"
            width="40"
            height="40"
          />
          <div>
            <h1>Brad Piti</h1>
            <p class="text-gray-400 text-sm">
              {{ $t("newsFeed.edit_your_profile") }}
            </p>
          </div>
        </div>
        <div class="flex flex-row gap-3 cursor-pointer">
          <home-icon />
          <h1>{{ $t("newsFeed.news_feed") }}</h1>
        </div>
        <div class="flex flex-row gap-3 cursor-pointer">
          <movies-icon />
          <h1>{{ $t("newsFeed.list_of_movies") }}</h1>
        </div>
        <div class="flex flex-row gap-3 cursor-pointer" @click="handleLogout">
          <logout-icon />
          <h1>{{ $t("newsFeed.logout") }}</h1>
        </div>
      </ul>
    </div>
  </div>
</template>
