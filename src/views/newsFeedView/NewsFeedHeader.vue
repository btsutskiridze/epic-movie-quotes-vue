<script setup>
import NotificationIcon from "@/components/icons/news-feed/NotificationIcon.vue";

import LanguageDropdown from "@/components/layout/LanguageDropdown.vue";
import MobileNavbar from "@/components/layout/news-feed/navbar/MobileNavbar.vue";
import MobileSearch from "@/components/layout/news-feed/search-bar/MobileSearch.vue";

import router from "@/router/index.js";
import { deleteJwtToken } from "@/helpers/jwt";

const handleLogout = () => {
  deleteJwtToken("jwt_token", "/", import.meta.VITE_DOMAIN);
  router.push({ name: "home" });
};
</script>

<template>
  <div>
    <header class="w-full m-auto text-white bg-[#1F1D2A]">
      <div
        class="w-[86%] m-auto flex justify-between items-center py-5 text-base"
      >
        <h2 class="font-medium uppercase hidden md:block text-[#DDCCAA]">
          {{ $t("landingView.movie_quotes") }}
        </h2>
        <mobile-navbar />
        <section class="flex justify-center items-center gap-8">
          <mobile-search />
          <notification-icon />
          <language-dropdown />
          <base-button
            :outline="true"
            @click="handleLogout"
            class="hidden md:block"
          >
            Log out</base-button
          >
        </section>
      </div>
    </header>
  </div>
</template>
