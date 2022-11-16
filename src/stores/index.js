import { createPinia } from "pinia";
import { useResetPasswordStore } from "@/stores/useResetPasswordStore";
import { useForgetPasswordStore } from "@/stores/useForgetPasswordStore";
import { useAutoLoginStore } from "@/stores/useAutoLoginStore";

const store = createPinia({
  useResetPasswordStore,
  useForgetPasswordStore,
  useAutoLoginStore,
});
export default store;
