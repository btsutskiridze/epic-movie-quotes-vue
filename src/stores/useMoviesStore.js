import { defineStore } from "pinia";
import axios from "@/config/axios/index.js";

export const useMoviesStore = defineStore("Movies", {
  state: () => {
    return {
      movies: [],
      loading: false,
      url: import.meta.env.VITE_API_BASE_IMAGES_URL,
    };
  },
  actions: {
    getMovies() {
      this.loading = true;
      axios
        .get("movies")
        .then((response) => {
          this.movies = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
});
