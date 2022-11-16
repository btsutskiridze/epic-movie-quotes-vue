import { defineStore } from "pinia";
import { setJwtToken } from "@/helpers/jwt/index.js";
import router from "@/router";
import axios from "@/config/axios/index.js";
import { useRoute } from "vue-router";

export const useAutoLoginStore = defineStore("AutoLogin", {
  state: () => {
    return {};
  },
  actions: {
    getEmail() {
      if (useRoute().query.email) {
        this.email = false;
      }
    },
    autoLogin() {
      this.loading = true;
      axios
        .post("auto-login", {
          email: this.email,
        })
        .then((response) => {
          setJwtToken(response.data.access_token, response.data.expires_in);
          router.push({ name: "news-feed" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
