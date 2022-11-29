import { defineStore } from "pinia";
import axios from "@/config/axios/index.js";
import { useRoute } from "vue-router";
import router from "@/router";

export const useQuoteStore = defineStore("Quote", {
  state: () => {
    return {
      quotes: [],
      quote: {},
      url: import.meta.env.VITE_API_BASE_IMAGES_URL,
      loading: false,
      isFetched: false,
      page: 1,
    };
  },
  actions: {
    getQuote(id = useRoute().params.quoteId, withRelations = "") {
      this.loading = true;
      const movieId = useRoute().params.movieId;
      axios
        .get("quotes/" + id + withRelations)
        .then((response) => {
          this.quote = response.data;
          this.isFetched = true;
        })
        .catch((e) => {
          console.log(e);
          router.replace({
            name: "movie",
            params: { movieId: movieId },
          });
        })
        .finally(() => {
          this.loading = false;
        });
    },
    getQuotes(type) {
      this.loading = type === "paginate" ? false : true;
      axios
        .get("quotes?page=" + this.page)
        .then((response) => {
          this.quotes.push(...response.data.data);
          this.page++;
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    refreshQuotes() {
      axios
        .post("number-quotes", {
          count: this.quotes.length,
        })
        .then((response) => {
          this.quotes = response.data;
        });
    },
  },
});
