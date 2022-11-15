<script setup>
import BaseContainer from "@/components/UI/news-feed/BaseContainer.vue";
import NewsFeedHeader from "@/views/newsFeedView/NewsFeedHeader.vue";
import MoviesContainer from "@/views/moviesListView/MoviesContainer.vue";
</script>

<template>
  <div class="bg-[#181624] text-[#DDCCAA] font-helvetica min-h-screen">
    <news-feed-header :have-movies="true" />
    <div class="w-full md:w-[86%] m-auto">
      <base-container :have-movies="true">
        <movies-container />
      </base-container>
      <router-view></router-view>
    </div>
  </div>
</template>
