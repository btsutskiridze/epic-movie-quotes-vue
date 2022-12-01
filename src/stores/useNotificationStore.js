import axios from "@/config/axios/index.js";
import { defineStore } from "pinia";
export const useNotificationStore = defineStore("Notification", {
  state: () => {
    return {
      notifications: [],
      allRead: true,
      unRead: 0,
    };
  },
  actions: {
    async getNotifications() {
      try {
        const response = await axios.get("notifications");
        console.log(response);
        this.notifications = response.data.notifications;
        this.allRead = response.data.allRead;
        this.unRead = this.notifications.length - response.data.read;
      } catch (e) {
        console.log(e);
      }
    },
    async readAll() {
      if (this.allRead === false) {
        try {
          const response = await axios.get("notifications/read-all");
          console.log(response);
          this.allRead = true;
          this.unRead = 0;
          this.getNotifications();
        } catch (e) {
          console.log(e);
        }
      }
    },
  },
});
