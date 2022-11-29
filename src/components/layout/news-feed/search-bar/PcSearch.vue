<script setup>
import SearchIcon from "@/components/icons/news-feed/SearchIcon.vue";
import PostsSearch from "@/components/layout/news-feed/post/PostsSearch.vue";
</script>

<template>
  <div class="w-3/4">
    <div
      class="hidden md:flex flex-row items-center relative overflow-x-hidden"
    >
      <search-icon class="absolute w-4 h-4" />
      <posts-search :isMobile="false" />
    </div>
  </div>
</template>
