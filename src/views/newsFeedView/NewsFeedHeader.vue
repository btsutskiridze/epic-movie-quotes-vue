<script setup>
import NotificationIcon from "@/components/icons/news-feed/NotificationIcon.vue";

import LanguageDropdown from "@/components/layout/LanguageDropdown.vue";
import MobileNavbar from "@/components/layout/news-feed/navbar/MobileNavbar.vue";
import MobileSearch from "@/components/layout/news-feed/search-bar/MobileSearch.vue";
import { useAuthStore } from "@/stores/useAuthStore";
import axios from "@/config/axios/index.js";

import router from "@/router/index.js";

defineProps({
  haveMovies: {
    type: Boolean,
    required: false,
    default: false,
  },
});
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
          <div :class="haveMovies ? 'hidden' : ''">
            <mobile-search />
          </div>
          <notification-icon />
          <language-dropdown />
          <base-button
            :outline="true"
            @click="handleLogout"
            class="hidden md:block"
          >
            {{ $t("newsFeed.logout") }}</base-button
          >
        </section>
      </div>
    </header>
  </div>
</template>
