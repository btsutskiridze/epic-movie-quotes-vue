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
    },
    setImage() {
      if (this.user.google_id) {
        this.imagePath = this.user.avatar;
      } else {
        this.imagePath =
          import.meta.env.VITE_API_BASE_IMAGES_URL + this.user.avatar;
      }
    },
  },
});
