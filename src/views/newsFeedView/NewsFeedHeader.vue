<script setup>
import BaseButton from "@/components/UI/form/BaseButton.vue";
import LanguageDropdown from "@/components/layout/LanguageDropdown.vue";
import BurgerMenu from "@/components/icons/news-feed/BurgerMenuIcon.vue";

import MoviesIcon from "@/components/icons/news-feed/MoviesIcon.vue";
import HomeIcon from "@/components/icons/news-feed/HomeIcon.vue";
import LogoutIcon from "@/components/icons/news-feed/LogoutIcon.vue";
import NotificationIcon from "@/components/icons/news-feed/NotificationIcon.vue";
import SearchIcon from "@/components/icons/news-feed/SearchIcon.vue";
import router from "@/router/index.js";
import { deleteJwtToken } from "@/helpers/jwt";
import { ref } from "vue";

const showMenu = ref(false);

const handleLogout = () => {
  deleteJwtToken("jwt_token", "/", import.meta.VITE_DOMAIN);
  router.push({ name: "home" });
};

const closeMenu = (e) => {
  if (e.target == document.getElementById("container")) showMenu.value = false;
};
</script>

<template>
  <div>
    <header class="w-full m-auto text-white bg-[#24222F]">
      <div class="">
        <div
          class="w-4/5 m-auto flex justify-between items-center py-6 text-base"
        >
          <h2 class="font-bold uppercase hidden sm:block text-[#DDCCAA]">
            {{ $t("landingView.movie_quotes") }}
          </h2>
          <burger-menu
            class="font-bold uppercase block sm:hidden relative cursor-pointer"
            @click="showMenu = !showMenu"
          />

          <div
            v-if="showMenu"
            @click="closeMenu"
            id="container"
            class="w-screen h-screen top-0 left-0 backdrop-blur-sm z-30 fixed"
          >
            <div
              v-if="showMenu"
              class="absolute top-0 left-0 bg-[#11101A] w-[80vw] h-[60vh] z-40 pt-10 pl-10 rounded-lg"
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
                    <h1>chemi sakheli</h1>
                    <p class="text-gray-400 text-sm">Edit your profile</p>
                  </div>
                </div>
                <div class="flex flex-row gap-3 cursor-pointer">
                  <home-icon />
                  <h1>News Feed</h1>
                </div>
                <div class="flex flex-row gap-3 cursor-pointer">
                  <movies-icon />
                  <h1>List of Movies</h1>
                </div>
                <div
                  class="flex flex-row gap-3 cursor-pointer"
                  @click="handleLogout"
                >
                  <logout-icon />
                  <h1>Log out</h1>
                </div>
              </ul>
            </div>
          </div>
          <div class="flex justify-center items-center gap-8">
            <search-icon class="block sm:hidden" />

            <notification-icon />
            <language-dropdown />
            <!-- <base-button :orange="true" class="hidden md:block"> </base-button> -->
            <base-button
              :outline="true"
              @click="handleLogout"
              class="hidden sm:block"
            >
              Log out</base-button
            >
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
