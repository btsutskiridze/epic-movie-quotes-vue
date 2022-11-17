import { createPinia } from "pinia";
import { useResetPasswordStore } from "@/stores/useResetPasswordStore";
import { useForgetPasswordStore } from "@/stores/useForgetPasswordStore";
import { useAutoLoginStore } from "@/stores/useAutoLoginStore";
import { useMoviesStore } from "@/stores/useMoviesStore";

const store = createPinia({
  useResetPasswordStore,
  useForgetPasswordStore,
  useAutoLoginStore,
  useMoviesStore,
});
export default store;
