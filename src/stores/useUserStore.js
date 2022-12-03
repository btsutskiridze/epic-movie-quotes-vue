import { defineStore } from "pinia";
import axios from "@/config/axios/authAxios.js";

export const useUserStore = defineStore("User", {
  state: () => {
    return {
      user: {},
    };
  },
  actions: {
    async getUser() {
      const response = await axios.get("me");
      this.user = response.data.user;
    },
  },
});
