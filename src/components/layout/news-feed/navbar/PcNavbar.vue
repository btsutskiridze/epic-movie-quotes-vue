<script setup>
import MoviesIcon from "@/components/icons/news-feed/MoviesIcon.vue";
import HomeIcon from "@/components/icons/news-feed/HomeIcon.vue";
import axios from "@/config/axios/authAxios.js";
import { onMounted, ref } from "vue";
const user = ref({});
onMounted(async () => {
  const response = await axios.get("me");
  user.value = response.data.user;
});
</script>

<template>
  <div class="flex flex-col gap-8 text-xl">
    <div class="flex flex-row items-center gap-4">
      <img
        src="@/assets/images/news-feed/avatar.png"
        alt="avatar"
        class="w-10 h-10"
      />
      <div>
        <h1>{{ user.name }}</h1>
        <p class="text-gray-400 text-base">
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
  </div>
</template>
