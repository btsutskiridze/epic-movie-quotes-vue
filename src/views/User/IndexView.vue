<script setup>
import BaseContainer from "@/components/UI/news-feed/BaseContainer.vue";
import NewsFeedHeader from "@/views/newsFeedView/NewsFeedHeader.vue";
import UserProfile from "@/views/User/UserProfile.vue";
</script>

<template>
  <div class="font-helvetica min-h-screen bg-[#181624] text-[#DDCCAA]">
    <news-feed-header :have-movies="true" :have-user="true" />
    <div class="m-auto w-full md:w-[86%]">
      <base-container :have-movies="true" :have-user="true">
        <user-profile />
      </base-container>
    </div>
  </div>
</template>
