import { defineStore } from "pinia";
import axios from "@/config/axios/authAxios.js";
import { useRoute } from "vue-router";

export const useAutoLoginStore = defineStore("AutoLogin", {
  state: () => {
    return {
      token: "",
      email: "",
      loading: false,
    };
  },
  actions: {
    getToken() {
      if (useRoute().query.token) {
        this.token = useRoute().query.token;
      }
    },
    getEmail() {
      if (useRoute().query.email) {
        this.email = useRoute().query.email;
      }
    },
    autoLogin() {
      this.loading = true;
      const key = this.email ? "email" : "token";
      const value = this.email ? this.email : this.token;
      const data = {};
      data[key] = value;
      axios
        .post("auto-login", data)
        .then((response) => {
          window.location.reload();
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
});
