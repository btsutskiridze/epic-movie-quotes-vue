import { useAuthStore } from "@/stores/useAuthStore";

export const isAuthenticated = () => {
  const authStore = useAuthStore();
  if (authStore.authenticated) {
    return true;
  } else {
    return false;
  }
};
