<script setup>
import SearchIcon from "@/components/icons/news-feed/SearchIcon.vue";
import GoBackArrow from "@/components/icons/news-feed/GoBackArrowIcon.vue";

import { ref } from "vue";

const showSearch = ref(false);
const close = (e) => {
  if (e.target === document.getElementById("container")) {
    showSearch.value = false;
  }
};
</script>

<template>
  <search-icon
    class="block md:hidden cursor-pointer"
    @click="showSearch = true"
  />
  <section
    v-if="showSearch"
    id="container"
    @click="close"
    class="block md:hidden w-screen h-screen top-0 left-0 backdrop-blur-sm z-30 fixed"
  >
    <div
      class="absolute top-0 left-0 bg-[#12101A] w-full h-[80vh] z-40 rounded-lg"
    >
      <div
        class="flex flex-row justify-start items-center gap-8 w-full border-b-[1px] py-6 pl-10 border-[#efefef4d]"
      >
        <go-back-arrow @click="showSearch = false" class="cursor-pointer" />
        <div class="w-4/5">
          <input
            type="search"
            name="search"
            id="search"
            autocomplete="off"
            class="bg-transparent text-base leading-[150%] focus:outline-none hover:outline-none placeholder-white w-full"
            :placeholder="$t('search.search')"
          />
        </div>
      </div>
      <div class="flex flex-col justify-center gap-6 px-[86px] py-6">
        <h1 class="text-[#97969A]">
          {{ $t("search.enter") }} <span class="text-white">@</span>
          {{ $t("search.to_search_movies") }}
        </h1>
        <h1 class="text-[#97969A]">
          {{ $t("search.enter") }}
          <span class="text-white">#</span>
          {{ $t("search.to_search_quotes") }}
        </h1>
      </div>
    </div>
  </section>
</template>

<style>
/* clears the ‘X’ from Internet Explorer */
input[type="search"]::-ms-clear {
  display: none;
  width: 0;
  height: 0;
}
input[type="search"]::-ms-reveal {
  display: none;
  width: 0;
  height: 0;
}
/* clears the ‘X’ from Chrome */
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  display: none;
}
</style>
