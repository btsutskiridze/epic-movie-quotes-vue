import { defineStore } from "pinia";
import { setResetPasswordError } from "@/helpers/api-error-message";
import axios from "@/config/axios/index.js";

export const useForgetPasswordStore = defineStore("ForgetPassword", {
  state: () => {
    return {
      emailSent: false,
      loading: false,
    };
  },
  actions: {
    sendPasswordResetMail(values, actions) {
      this.loading = true;
      axios
        .post("forget-password", {
          email: values.email,
        })
        .then(() => {
          this.emailSent = true;
          this.loading = false;
        })
        .catch((error) => {
          this.loading = false;
          const errorsObj = error.response.data.errors;
          for (const errorName in errorsObj) {
            setResetPasswordError(errorName, actions);
          }
        });
    },
  },
});
