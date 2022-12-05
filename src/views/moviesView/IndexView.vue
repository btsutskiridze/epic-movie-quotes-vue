<script setup>
import BaseContainer from "@/components/UI/news-feed/BaseContainer.vue";
import NewsFeedHeader from "@/views/newsFeedView/NewsFeedHeader.vue";
</script>

<template>
  <div class="font-helvetica min-h-screen bg-[#181624] text-[#DDCCAA]">
    <news-feed-header :have-movies="true" />
    <div class="m-auto w-full md:w-[94%] lg:w-[86%]">
      <base-container :have-movies="true">
        <router-view></router-view>
      </base-container>
    </div>
  </div>
</template>
