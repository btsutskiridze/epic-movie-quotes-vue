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
  <div class="flex cursor-default flex-col gap-8 text-xl">
    <div class="flex flex-row items-center gap-4">
      <img
        :src="userStore.user?.avatar"
        alt="avatar"
        class="h-12 w-12 rounded-full object-cover"
        :class="
          routePath.includes('user-profile')
            ? 'outline outline-2 -outline-offset-1 outline-[#E31221]'
            : ''
        "
      />

      <div>
        <h1>{{ user.name }}</h1>
        <p
          class="cursor-pointer whitespace-pre text-base text-gray-400"
          @click="$router.push({ name: 'user-profile' })"
        >
          <span>
            {{ $t("newsFeed.edit_your_profile") }}
          </span>
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
      <h1 class="whitespace-nowrap">{{ $t("newsFeed.list_of_movies") }}</h1>
    </router-link>
  </div>
</template>
