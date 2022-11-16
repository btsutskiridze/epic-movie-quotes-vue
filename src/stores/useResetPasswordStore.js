import { defineStore } from "pinia";
import axios from "@/config/axios/index.js";
import { useRoute } from "vue-router";

export const useResetPasswordStore = defineStore("ResetPassword", {
  state: () => {
    return {
      email: "",
      token: "",
      loading: false,
      resetPassword: false,
    };
  },
  actions: {
    getEmailAndToken() {
      if (useRoute().query.reset_token) {
        this.email = useRoute().query.email;
        this.token = useRoute().query.reset_token;
      }
    },
    getResetToken() {
      if (useRoute().query.reset_token) {
        this.resetPassword = false;
      }
    },
    changePassword(values, actions) {
      this.loading = true;
      axios
        .post("reset-password", {
          email: this.email,
          token: this.token,
          password: values.password,
          password_confirmation: values.password_confirmation,
        })
        .then(() => {
          this.resetPassword = true;
          this.loading = false;
        })
        .catch((error) => {
          this.loading = false;
          const errorsObj = error.response.data.message;
          actions.setFieldError("password", errorsObj);
        });
    },
  },
});
