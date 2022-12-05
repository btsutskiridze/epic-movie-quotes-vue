<script setup>
import SearchIcon from "@/components/icons/news-feed/SearchIcon.vue";
import GoBackArrow from "@/components/icons/news-feed/GoBackArrowIcon.vue";
import PostsSearch from "@/components/layout/news-feed/post/PostsSearch.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const routePath = ref(useRouter().currentRoute.value.path);
const showSearch = ref(false);
const close = (e) => {
  if (e.target === document.getElementById("container")) {
    showSearch.value = false;
  }
};
</script>

<template>
  <search-icon
    class="block cursor-pointer md:hidden"
    @click="showSearch = true"
  />
  <section
    v-show="showSearch"
    @click="close"
    class="fixed top-0 left-0 z-30 block h-screen w-screen backdrop-blur-sm md:hidden"
  >
    <div
      class="absolute top-0 left-0 z-40 h-[80vh] w-full rounded-lg bg-[#12101A]"
    >
      <div
        class="flex w-full flex-row items-center justify-start gap-8 border-b border-[#efefef4d] py-6 pl-10"
      >
        <go-back-arrow @click="showSearch = false" class="cursor-pointer" />
        <div class="w-4/5">
          <posts-search :isMobile="true" />
        </div>
      </div>
      <div
        class="flex flex-col justify-center gap-6 px-[5.3rem] py-6"
        v-if="!routePath.includes('movies')"
      >
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
