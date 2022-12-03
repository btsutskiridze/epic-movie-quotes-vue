<script setup>
import BaseContainer from "@/components/UI/news-feed/BaseContainer.vue";
import NewsFeedHeader from "@/views/newsFeedView/NewsFeedHeader.vue";
import UserProfile from "@/views/User/UserProfile.vue";
</script>

<template>
  <div class="bg-[#181624] text-[#DDCCAA] font-helvetica min-h-screen">
    <news-feed-header :have-movies="true" :have-user="true" />
    <div class="w-full md:w-[86%] m-auto">
      <base-container :have-movies="true" :have-user="true">
        <user-profile />
      </base-container>
    </div>
  </div>
</template>
