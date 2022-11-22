import { useAuthStore } from "@/stores/useAuthStore";

export const isAuthenticated = () => {
  const authStore = useAuthStore();
  if (!authStore.authenticated) {
    return false;
  } else {
    return true;
  }
};
