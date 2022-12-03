<script setup>
import MoviesIcon from "@/components/icons/news-feed/MoviesIcon.vue";
import HomeIcon from "@/components/icons/news-feed/HomeIcon.vue";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/useUserStore";
const userStore = useUserStore();
const user = computed(() => userStore.user);

const routePath = ref(useRouter().currentRoute.value.path);
</script>

<template>
  <div class="flex flex-col gap-8 text-xl cursor-default">
    <div class="flex flex-row items-center gap-4">
      <img
        :src="userStore.imagePath"
        alt="avatar"
        class="w-12 h-12 rounded-full object-cover"
        :class="
          routePath.includes('user-profile')
            ? 'outline outline-2 -outline-offset-1 outline-[#E31221]'
            : ''
        "
      />

      <div>
        <h1>{{ user.name }}</h1>
        <p
          class="text-gray-400 text-base cursor-pointer"
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
      <h1 class="whitespace-nowrap">{{ $t("newsFeed.list_of_movies") }}</h1>
    </router-link>
  </div>
</template>
