import { defineStore } from "pinia";
// import { setResetPasswordError } from "@/helpers/api-error-message";
// import axios from "@/config/axios/index.js";
// import { useRoute } from "vue-router";

export const useRegisterStore = defineStore("Register", {
  // arrow function recommended for full type inference
  state: () => {
    return {
      loading: null,
    };
  },
  actions: {},
});
