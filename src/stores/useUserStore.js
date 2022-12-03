import { defineStore } from "pinia";
import axios from "@/config/axios/authAxios.js";

export const useUserStore = defineStore("User", {
  state: () => {
    return {
      user: {},
      imagePath: "",
    };
  },
  actions: {
    async getUser() {
      const response = await axios.get("me");
      this.user = response.data.user;
      this.setImage(response.data.user);
    },
    setImage(user) {
      if (user.google_id) {
        this.imagePath = user.avatar;
      } else {
        this.imagePath = import.meta.env.VITE_API_BASE_IMAGES_URL + user.avatar;
      }
    },
  },
});
