<script setup>
import NewsFeedHeader from "@/views/newsFeedView/NewsFeedHeader.vue";
import NewsFeedBody from "@/views/newsFeedView/NewsFeedBody.vue";
</script>

<template>
  <div class="bg-[#181624] text-[#DDCCAA] font-helvetica min-h-screen">
    <news-feed-header />
    <div class="w-full md:w-[86%] m-auto">
      <news-feed-body />
    </div>
  </div>
</template>
