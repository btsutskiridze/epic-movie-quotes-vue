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
const interval = setInterval(() => {
  if (time.value === "58 seconds ago") clearInterval(interval);
  time.value = timeStore.timeAgo(props.notif.created_at);
}, 1000);
</script>

<template>
  <div
    class="text-lg p-3 mb-4 flex flex-row gap-4 justify-between w-full h-[5.2rem] rounded-[0.25rem] border border-[#363A3E]"
  >
    <div class="flex flex-row gap-4 items-center">
      <img
        src="@/assets/images/news-feed/avatar.png"
        alt="avatar"
        width="68"
        height="68"
        class="w-[60px] h-[60px] rounded-full"
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
          <span class="leading-none"> Commented to your movie quote </span>
        </p>
        <p class="flex flex-row items-center gap-2 text-gray-400" v-else>
          <liked-icon class="w-[1.2rem] h-[1.2rem]" />
          <span class="leading-none"> Reacted to your quote</span>
        </p>
      </div>
    </div>
    <div class="flex flex-col items-end">
      <h1>{{ time }}</h1>
      <h1 v-if="!notif.read" class="text-green-600">New</h1>
    </div>
  </div>
</template>
