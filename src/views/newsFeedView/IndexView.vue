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
  <div class="bg-[#181624] text-[#DDCCAA] font-helvetica min-h-screen">
    <news-feed-header />
    <router-view></router-view>

    <div class="w-full md:w-[86%] m-auto">
      <news-feed-body />
    </div>
  </div>
</template>
