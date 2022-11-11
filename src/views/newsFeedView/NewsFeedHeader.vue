<script setup>
import LanguageDropdown from "@/components/layout/LanguageDropdown.vue";
import BurgerMenu from "@/components/icons/news-feed/BurgerMenuIcon.vue";

import MoviesIcon from "@/components/icons/news-feed/MoviesIcon.vue";
import HomeIcon from "@/components/icons/news-feed/HomeIcon.vue";
import LogoutIcon from "@/components/icons/news-feed/LogoutIcon.vue";
import NotificationIcon from "@/components/icons/news-feed/NotificationIcon.vue";
import SearchIcon from "@/components/icons/news-feed/SearchIcon.vue";
import GoBackArrow from "@/components/icons/news-feed/GoBackArrowIcon.vue";

import router from "@/router/index.js";
import { deleteJwtToken } from "@/helpers/jwt";
import { ref } from "vue";

const showMenu = ref(false);
const showSearch = ref(false);

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
    <header class="w-full m-auto text-white bg-[#1F1D2A]">
      <div class="">
        <div
          class="w-[86%] m-auto flex justify-between items-center py-5 text-base"
        >
          <h2 class="font-medium uppercase hidden md:block text-[#DDCCAA]">
            {{ $t("landingView.movie_quotes") }}
          </h2>
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
            <search-icon class="block md:hidden" @click="showSearch = true" />
            <div
              v-if="showSearch"
              class="block md:hidden w-screen h-screen top-0 left-0 backdrop-blur-sm z-30 fixed"
            >
              <div
                class="absolute top-0 left-0 bg-[#12101A] w-full h-[80vh] z-40 rounded-lg"
              >
                <div
                  class="flex flex-row justify-start items-center gap-8 w-full border-b-[1px] py-6 pl-10 border-[#efefef4d]"
                >
                  <go-back-arrow @click="showSearch = false" />
                  <div class="w-4/5">
                    <input
                      type="search"
                      name="search"
                      id="search"
                      autocomplete="off"
                      class="bg-transparent text-base leading-[150%] focus:outline-none hover:outline-none placeholder-white w-full"
                      placeholder="Search"
                    />
                  </div>
                </div>
                <div class="flex flex-col justify-center gap-6 px-[86px] py-6">
                  <h1 class="text-[#97969A]">
                    Enter <span class="text-white">@</span> to search movies
                  </h1>
                  <h1 class="text-[#97969A]">
                    Enter <span class="text-white">#</span> to search quotes
                  </h1>
                </div>
              </div>
            </div>
            <notification-icon />
            <language-dropdown />
            <!-- <base-button :orange="true" class="hidden md:block"> </base-button> -->
            <base-button
              :outline="true"
              @click="handleLogout"
              class="hidden md:block"
            >
              Log out</base-button
            >
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<style>
/* clears the ‘X’ from Internet Explorer */
input[type="search"]::-ms-clear {
  display: none;
  width: 0;
  height: 0;
}
input[type="search"]::-ms-reveal {
  display: none;
  width: 0;
  height: 0;
}
/* clears the ‘X’ from Chrome */
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  display: none;
}
</style>
