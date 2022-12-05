<script setup>
import SearchIcon from "@/components/icons/news-feed/SearchIcon.vue";
import PostsSearch from "@/components/layout/news-feed/post/PostsSearch.vue";
</script>

<template>
  <div class="w-3/4">
    <div
      class="relative hidden flex-row items-center overflow-x-hidden md:flex"
    >
      <search-icon class="absolute h-4 w-4" />
      <posts-search :isMobile="false" />
    </div>
  </div>
</template>
