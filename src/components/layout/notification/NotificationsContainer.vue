<script setup>
import NotificationIcon from "@/components/icons/news-feed/NotificationIcon.vue";
import NotificationItem from "@/components/layout/notification/NotificationItem.vue";
import { computed, onBeforeMount, ref } from "vue";
import { useNotificationStore } from "@/stores/useNotificationStore";
const show = ref(false);
const notificationStore = useNotificationStore();
onBeforeMount(() => {
  notificationStore.getNotifications();
});
const notifications = computed(() => notificationStore.notifications);
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
      v-if="!notificationStore.allRead"
      class="cursor-pointer absolute flex items-center justify-center text-[0.6rem] top-[-0.25rem] right-0 bg-red-500 w-4 h-4 rounded-full"
      >{{ notificationStore.unRead }}</span
    >
    <div
      v-if="show"
      class="top-[1.9rem] md:top-[2.3rem] absolute w-0 h-0 border-l-[10px] border-l-transparent border-b-[15px] md:border-b-[25px] border-b-black border-r-[10px] border-r-transparent"
    ></div>
  </div>
  <div
    v-if="show"
    class="cursor-default flex flex-col gap-6 px-6 py-10 rounded-[0.25rem] z-[50] absolute top-[4rem] md:top-[5.6rem] bg-[#000] right-0 md:right-[7%] w-screen md:w-auto md:min-w-[24rem]"
  >
    <section
      @click="notificationStore.readAll()"
      class="text-white flex flex-row justify-between items-center"
    >
      <h1 class="text-xl md:text-[1.8rem]">Notifications</h1>
      <h2 class="text-sm md:text-lg underline text-white cursor-pointer">
        Mark as all read
      </h2>
    </section>
    <section class="h-[76vh] md:h-[24rem] overflow-y-scroll">
      <div v-if="notifications.length">
        <notification-item
          :notif="notification"
          v-for="notification in notifications"
          :key="notification.id"
        />
      </div>
      <div v-else class="flex justify-center h-full">
        <h1 class="text-white text-xl">No notifications</h1>
      </div>
    </section>
  </div>
</template>
