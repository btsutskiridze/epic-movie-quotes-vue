import { createPinia } from "pinia";
import { useResetPasswordStore } from "@/stores/useResetPasswordStore";
import { useForgetPasswordStore } from "@/stores/useForgetPasswordStore";
import { useAutoLoginStore } from "@/stores/useAutoLoginStore";
import { useMoviesStore } from "@/stores/useMoviesStore";
import { useAuthStore } from "@/stores/useAuthStore";

const store = createPinia({
  useResetPasswordStore,
  useForgetPasswordStore,
  useAutoLoginStore,
  useMoviesStore,
  useAuthStore,
});
export default store;
