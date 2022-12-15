<script setup>
import LanguageDropdown from "@/components/layout/LanguageDropdown.vue";
import MobileNavbar from "@/components/layout/news-feed/navbar/MobileNavbar.vue";
import MobileSearch from "@/components/layout/news-feed/search-bar/MobileSearch.vue";
import NotifiactionsContainer from "@/components/layout/notification/NotificationsContainer.vue";
import { useAuthStore } from "@/stores/useAuthStore";
import axios from "@/config/axios/authAxios.js";

import router from "@/router/index.js";

defineProps({
  haveUser: {
    type: Boolean,
    required: false,
    default: false,
  },
});
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
  <div>
    <header class="fixed z-[30] m-auto w-full bg-[#1F1D2A] text-white">
      <div
        class="m-auto flex w-[86%] items-center justify-between py-5 text-base md:w-[94%] md:py-3 lg:w-[86%]"
      >
        <h2 class="hidden font-medium uppercase text-[#DDCCAA] lg:block">
          {{ $t("landingView.movie_quotes") }}
        </h2>
        <mobile-navbar />
        <section class="flex items-center justify-center gap-8">
          <mobile-search v-if="!haveUser" />
          <notifiactions-container />
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
