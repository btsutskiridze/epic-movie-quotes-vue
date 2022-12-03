<script setup>
import { useSearchStore } from "@/stores/useSearchStore";
import { useQuoteStore } from "@/stores/useQuoteStore";
import axios from "@/config/axios/index.js";
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
const search = (e) => {
  const search = e.target.value.trim();
  if (search === "" || search === "@" || search === "#") {
    return;
  } else {
    axios
      .post("quotes/search", {
        search: search,
      })
      .then((response) => {
        useQuoteStore().searchedQuotes = response.data;
        console.log("triggered");
      });
  }
};
</script>

<template>
  <input
    v-if="isMobile"
    @keyup="setSearch($event), search($event)"
    type="search"
    name="search"
    id="search"
    autocomplete="off"
    class="w-full bg-transparent text-base leading-[150%] placeholder-white hover:outline-none focus:outline-none"
    :placeholder="$t('search.search')"
  />
  <span
    v-if="searchInput === '' && !isMobile"
    class="absolute left-6 whitespace-nowrap text-[#97969A]"
    >{{ $t("search.enter") }} <span class="text-white">@</span>
    {{ $t("search.to_search_movies") }} {{ $t("search.enter") }}
    <span class="text-white">#</span>
    {{ $t("search.to_search_quotes") }}</span
  >
  <input
    v-if="!isMobile"
    v-model="searchInput"
    @keyup="setSearch($event), search($event)"
    type="search"
    name="search"
    id="search"
    autocomplete="off"
    class="z-20 w-full border-b border-[#efefef4d] bg-transparent py-2 pl-6 text-base leading-[150%] placeholder-white hover:outline-none focus:outline-none"
    placeholder=""
  />
</template>
