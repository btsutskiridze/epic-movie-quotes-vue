import axios from "axios";
import { useAuthStore } from "@/stores/useAuthStore";

const authAxios = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 15000,
});

authAxios.defaults.withCredentials = true;

authAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status == 401) {
      const authStore = useAuthStore();
      authStore.authenticated = false;
    }
    return Promise.reject(error);
  }
);

export default authAxios;
