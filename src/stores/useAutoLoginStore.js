import { defineStore } from "pinia";
// import router from "@/router";
import axios from "@/config/axios/authAxios.js";
import { useRoute } from "vue-router";

export const useAutoLoginStore = defineStore("AutoLogin", {
  state: () => {
    return {
      token: "",
    };
  },
  actions: {
    getToken() {
      if (useRoute().query.token) {
        this.token = useRoute().query.token;
      }
    },
    autoLogin() {
      axios.defaults.withCreadentials = true;
      this.loading = true;
      axios
        .post("auto-login", {
          token: this.token,
        })
        .then((response) => {
          window.location.reload();
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
