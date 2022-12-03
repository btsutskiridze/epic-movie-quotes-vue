import { defineStore } from "pinia";
import axios from "@/config/axios/index.js";
import { useRoute } from "vue-router";
import router from "@/router";
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
      this.loading = true;
      axios
        .get("movies")
        .then((response) => {
          this.movies = response.data;
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    getMovie(id = useRoute().params.movieId) {
      this.loading = true;
      axios
        .get("movies/" + id)
        .then((response) => {
          this.movie = response.data;
          this.genres = JSON.parse(this.movie.genre);
        })
        .catch(() => {
          router.push({ name: "all-movies" });
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
});
