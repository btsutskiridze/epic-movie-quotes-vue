import { defineStore } from "pinia";
// import { setResetPasswordError } from "@/helpers/api-error-message";
import axios from "@/config/axios/index.js";
import { useRoute } from "vue-router";

export const useResetPasswordStore = defineStore("ResetPassword", {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      email: "",
      token: "",
      loading: false,
      resetPassword: null,
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
