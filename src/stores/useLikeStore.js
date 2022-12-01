import { defineStore } from "pinia";

export const useLikeStore = defineStore("Like", {
  state: () => {
    return {
      wasLiked: null,
    };
  },
});
