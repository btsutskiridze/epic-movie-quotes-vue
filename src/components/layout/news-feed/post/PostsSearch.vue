<script setup>
import { useSearchStore } from "@/stores/useSearchStore";
import { ref } from "vue";
defineProps({
  isMobile: {
    type: Boolean,
    required: true,
  },
});

const searchInput = ref("");

const setSearch = (e) => {
  useSearchStore().$patch({
    search: e.target.value,
  });
};
</script>

<template>
  <input
    v-if="isMobile"
    @keyup="setSearch"
    type="search"
    name="search"
    id="search"
    autocomplete="off"
    class="bg-transparent text-base leading-[150%] focus:outline-none hover:outline-none placeholder-white w-full"
    :placeholder="$t('search.search')"
  />
  <span
    v-if="searchInput === '' && !isMobile"
    class="text-[#97969A] absolute left-6 whitespace-nowrap"
    >{{ $t("search.enter") }} <span class="text-white">@</span>
    {{ $t("search.to_search_movies") }} {{ $t("search.enter") }}
    <span class="text-white">#</span>
    {{ $t("search.to_search_quotes") }}</span
  >
  <input
    v-if="!isMobile"
    v-model="searchInput"
    @keyup="setSearch"
    type="search"
    name="search"
    id="search"
    autocomplete="off"
    class="z-20 bg-transparent text-base leading-[150%] focus:outline-none hover:outline-none placeholder-white border-b border-[#efefef4d] py-2 pl-6 w-full"
    placeholder=""
  />
</template>
