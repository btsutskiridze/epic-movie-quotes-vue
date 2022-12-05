<script setup>
import NewsFeedHeader from "@/views/newsFeedView/NewsFeedHeader.vue";
import NewsFeedBody from "@/views/newsFeedView/NewsFeedBody.vue";
import { onMounted } from "vue";
import { useUserStore } from "@/stores/useUserStore";

const userStore = useUserStore();

onMounted(() => {
  userStore.getUser();
});
</script>

<template>
  <div class="font-helvetica min-h-screen bg-[#181624] text-[#DDCCAA]">
    <news-feed-header />
    <router-view></router-view>

    <div class="m-auto w-full md:w-[94%] lg:w-[86%]">
      <news-feed-body />
    </div>
  </div>
</template>
