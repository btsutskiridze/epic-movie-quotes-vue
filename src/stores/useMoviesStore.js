import { defineStore } from "pinia";
import axios from "@/config/axios/index.js";
import { useRoute } from "vue-router";

export const useMoviesStore = defineStore("Movies", {
  state: () => {
    return {
      movies: [],
      movie: {},
      genres: [],
      url: import.meta.env.VITE_API_BASE_IMAGES_URL,
      loading: true,
    };
  },
  actions: {
    getMovies() {
      axios
        .get("movies")
        .then((response) => {
          this.movies = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getMovie() {
      this.loading = true;
      axios
        .get("movies/" + useRoute().params.id)
        .then((response) => {
          this.movie = response.data;
          this.genres = JSON.parse(this.movie.genre);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
});
