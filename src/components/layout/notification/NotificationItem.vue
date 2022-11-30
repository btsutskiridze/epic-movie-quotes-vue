<script setup>
import QuoteIcon from "@/components/icons/movies/QuoteIcon.vue";
import likedIcon from "@/components/icons/quotes/LikedIcon.vue";
</script>

<template>
  <div
    class="text-lg p-3 mb-4 flex flex-row gap-4 items-center justify-between w-full h-[5.2rem] rounded-[0.25rem] border border-[#363A3E]"
  >
    <div class="flex flex-row gap-4 items-center">
      <img
        src="@/assets/images/news-feed/avatar.png"
        alt="avatar"
        width="68"
        height="68"
        class="w-[60px] h-[60px]"
      />
      <div class="flex flex-col gap-1">
        <h1>Brad Piti</h1>

        <p class="flex flex-row items-center gap-2 text-gray-400">
          <liked-icon class="w-[1.2rem] h-[1.2rem]" />
          <span class="leading-none"> Reacted to your quote</span>
        </p>
      </div>
    </div>
    <div class="flex flex-col items-end">
      <h1>5 min ago</h1>
      <h1 class="text-green-600">New</h1>
    </div>
  </div>
</template>
