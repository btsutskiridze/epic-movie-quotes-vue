<script setup>
import NotificationIcon from "@/components/icons/news-feed/NotificationIcon.vue";
import NotificationItem from "@/components/layout/notification/NotificationItem.vue";
import { ref } from "vue";
const show = ref(false);
</script>

<template>
  <div
    class="fixed w-screen h-screen top-0 left-0 z-40"
    v-if="show"
    @click="show = false"
  ></div>
  <div class="relative">
    <notification-icon class="relative cursor-pointer" @click="show = !show" />
    <span
      @click="show = !show"
      class="cursor-pointer absolute flex items-center justify-center text-xs top-[-0.25rem] right-0 bg-red-500 w-4 h-4 rounded-full"
      >2</span
    >
    <div
      v-if="show"
      class="top-[2.3rem] absolute w-0 h-0 border-l-[10px] border-l-transparent border-b-[25px] border-b-black border-r-[10px] border-r-transparent"
    ></div>
  </div>
  <div
    v-if="show"
    class="cursor-default flex flex-col gap-6 px-6 py-10 rounded-[0.25rem] z-[50] absolute top-[5rem] md:top-[5.6rem] bg-[#000] right-[7%] min-w-[44%]"
  >
    <section class="text-white flex flex-row justify-between">
      <h1 class="text-[1.8rem]">Notifications</h1>
      <h2 class="text-lg underline text-white cursor-pointer">
        Mark as all read
      </h2>
    </section>
    <section class="h-[20rem] overflow-y-scroll">
      <notification-item />
      <notification-item />
      <notification-item />
      <notification-item />
      <notification-item />
    </section>
  </div>
</template>
