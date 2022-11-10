<script setup>
import NewsFeedHeader from "@/views/newsFeedView/NewsFeedHeader.vue";
import NewsFeedBody from "@/views/newsFeedView/NewsFeedBody.vue";
</script>

<template>
  <div
    class="bg-[#0D0C15] md:bg-[#181624] text-[#DDCCAA] font-helvetica min-h-screen"
  >
    <news-feed-header />
    <div class="w-[86%] m-auto">
      <news-feed-body />
    </div>
  </div>
</template>
