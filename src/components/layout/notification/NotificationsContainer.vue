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
    class="fixed top-0 left-0 z-40 h-screen w-screen bg-[#00000046]"
    v-if="show"
    @click="show = false"
  ></div>
  <div class="relative" :class="show ? 'z-50' : ''">
    <notification-icon class="relative cursor-pointer" @click="show = !show" />
    <span
      @click="show = !show"
      v-if="!notificationStore.allRead"
      class="absolute top-[-0.25rem] right-0 flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-red-500 text-[0.6rem]"
      >{{ notificationStore.unRead }}</span
    >
    <div
      v-if="show"
      class="absolute top-[1.9rem] h-0 w-0 border-l-[10px] border-b-[15px] border-r-[10px] border-l-transparent border-b-black border-r-transparent md:top-[2.3rem] md:border-b-[25px]"
    ></div>
  </div>
  <div
    v-if="show"
    class="absolute top-[4rem] right-0 z-[50] flex w-screen cursor-default flex-col gap-6 rounded-[0.25rem] bg-[#000] px-6 py-10 md:top-[5.6rem] md:right-[7%] md:w-auto md:min-w-[40rem]"
  >
    <section
      @click="notificationStore.readAll()"
      class="flex flex-row items-center justify-between text-white"
    >
      <h1 class="text-xl md:text-[1.8rem]">{{ $t("notif.notifications") }}</h1>
      <h2
        class="cursor-pointer text-right text-sm text-white underline md:text-lg"
      >
        {{ $t("notif.mark_as_all_read") }}
      </h2>
    </section>
    <section class="h-[76vh] overflow-y-scroll md:h-[24rem]">
      <div v-if="notifications.length">
        <notification-item
          :notif="notification"
          v-for="notification in notifications"
          :key="notification.id"
        />
      </div>
      <div v-else class="flex h-full justify-center">
        <h1 class="text-xl text-white">{{ $t("notif.no_notifications") }}</h1>
      </div>
    </section>
  </div>
</template>
