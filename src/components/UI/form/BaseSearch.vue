<script setup>
import SearchIcon from "@/components/icons/news-feed/SearchIcon.vue";
import { useSearchStore } from "@/stores/useSearchStore";

const setSearch = (e) => {
  useSearchStore().$patch({
    search: e.target.value,
  });
};
</script>
<template>
  <div class="flex-row items-center">
    <search-icon class="absolute w-4 h-4" />
    <input
      type="search"
      @keyup="setSearch"
      name="search"
      id="search"
      autocomplete="off"
      class="z-20 bg-transparent text-base leading-[150%] focus:outline-none hover:outline-none placeholder-white border-b border-[#efefef4d] py-2 pl-6 w-full"
      :placeholder="$t('search.search')"
    />
  </div>
</template>
