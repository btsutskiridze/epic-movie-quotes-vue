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
</script>
<template>
  <div
    class="mb-4 flex w-full flex-col justify-between gap-1 rounded-[0.25rem] border border-[#363A3E] p-3 text-base md:flex-row md:gap-4 md:text-lg"
  >
    <div class="flex flex-row items-center gap-4">
      <img
        :src="notif.from.avatar"
        alt="avatar"
        class="h-[3.75rem] w-[3.75rem] rounded-full object-cover"
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
          <quote-icon class="h-[1.2rem] w-[1.2rem]" />
          <span class="hidden leading-none md:block">
            {{ $t("notif.commented_to_your_movie_quote") }}
          </span>
          <span class="block leading-none md:hidden">
            {{ $t("notif.commented_to_your_quote") }}...
          </span>
        </p>
        <p class="flex flex-row items-center gap-2 text-gray-400" v-else>
          <liked-icon class="h-[1.2rem] w-[1.2rem]" />
          <span class="leading-none">
            {{ $t("notif.reacted_to_your_quote") }}
          </span>
        </p>
      </div>
    </div>
    <div
      class="flex flex-row-reverse justify-end gap-4 md:flex-col md:items-end md:justify-start md:gap-0"
    >
      <p class="">{{ time }}</p>
      <h1 class="min-w-[3.75rem] text-center text-green-600">
        <span v-if="!notif.read"> {{ $t("notif.new") }} </span>
      </h1>
    </div>
  </div>
</template>
