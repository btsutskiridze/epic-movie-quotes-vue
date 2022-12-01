<script setup>
import QuoteIcon from "@/components/icons/movies/QuoteIcon.vue";
import likedIcon from "@/components/icons/quotes/LikedIcon.vue";
import { ref } from "vue";
import { useTimeStore } from "@/stores/useTimeStore";
const props = defineProps({
  notif: {
    type: Object,
    required: true,
  },
});

const timeStore = useTimeStore();
const time = ref(timeStore.timeAgo(props.notif.created_at));
// const interval = setInterval(() => {
//   if (time.value === "59 seconds ago") clearInterval(interval);
//   time.value = timeStore.timeAgo(props.notif.created_at);
// }, 1000);
</script>
<template>
  <div
    class="text-base md:text-lg p-3 mb-4 flex flex-col md:flex-row gap-1 md:gap-4 justify-between w-full rounded-[0.25rem] border border-[#363A3E]"
  >
    <div class="flex flex-row gap-4 items-center">
      <img
        src="@/assets/images/news-feed/avatar.png"
        alt="avatar"
        class="w-[3.75rem] h-[3.75rem] rounded-full"
        :class="
          !notif.read
            ? 'outline outline-2 -outline-offset-1 outline-green-600'
            : ''
        "
      />
      <div class="flex flex-col gap-1">
        <h1>{{ notif.from.name }}</h1>
        <p
          class="flex flex-row items-center gap-2 text-gray-400"
          v-if="notif.type === 'comment'"
        >
          <quote-icon class="w-[1.2rem] h-[1.2rem]" />
          <span class="leading-none hidden md:block">
            Commented to your movie quote
          </span>
          <span class="leading-none block md:hidden">
            Commented to your quote..
          </span>
        </p>
        <p class="flex flex-row items-center gap-2 text-gray-400" v-else>
          <liked-icon class="w-[1.2rem] h-[1.2rem]" />
          <span class="leading-none"> Reacted to your quote</span>
        </p>
      </div>
    </div>
    <div
      class="flex flex-row-reverse gap-4 md:gap-0 justify-end md:justify-start md:flex-col md:items-end"
    >
      <p class="">{{ time }}</p>
      <h1 class="min-w-[3.75rem] text-center text-green-600">
        <span v-if="!notif.read">New</span>
      </h1>
    </div>
  </div>
</template>
