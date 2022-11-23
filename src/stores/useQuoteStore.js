import { defineStore } from "pinia";
import axios from "@/config/axios/index.js";
import { useRoute } from "vue-router";

export const useQuoteStore = defineStore("Quote", {
  state: () => {
    return {
      quotes: [],
      quote: {},
      url: import.meta.env.VITE_API_BASE_IMAGES_URL,
      loading: true,
    };
  },
  actions: {
    getQuote(id = useRoute().params.quoteId) {
      this.loading = true;
      axios
        .get("quotes/" + id)
        .then((response) => {
          this.quote = response.data;
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    // getQuotes(id = useRoute().params.movieId) {
    //   this.loading = true;
    //   axios
    //     .get("quotes/" + id)
    //     .then((response) => {
    //       this.movie = response.data;
    //       this.genres = JSON.parse(this.movie.genre);
    //     })
    //     .finally(() => {
    //       this.loading = false;
    //     });
    // },
  },
});
