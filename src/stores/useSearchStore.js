import { defineStore } from "pinia";

export const useSearchStore = defineStore("Search", {
  state: () => {
    return {
      search: "",
    };
  },
  actions: {},
});
