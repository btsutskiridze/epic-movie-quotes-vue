<script setup>
import SearchIcon from "@/components/icons/news-feed/SearchIcon.vue";

import { ref } from "vue";

const searchInput = ref(null);
</script>

<template>
  <div class="w-3/4">
    <div
      class="hidden md:flex flex-row items-center relative overflow-x-hidden"
    >
      <search-icon class="absolute w-4 h-4" />
      <span
        v-if="!searchInput"
        class="text-[#97969A] absolute left-6 whitespace-nowrap"
        >{{ $t("search.enter") }} <span class="text-white">@</span>
        {{ $t("search.to_search_movies") }} {{ $t("search.enter") }}
        <span class="text-white">#</span>
        {{ $t("search.to_search_quotes") }}</span
      >
      <input
        v-model="searchInput"
        type="search"
        name="search"
        id="search"
        autocomplete="off"
        class="z-20 bg-transparent text-base leading-[150%] focus:outline-none hover:outline-none placeholder-white border-b border-[#efefef4d] py-2 pl-6 w-full"
        placeholder=""
      />
    </div>
  </div>
</template>
