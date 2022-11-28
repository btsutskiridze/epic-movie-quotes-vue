import { defineStore } from "pinia";
import { useUserStore } from "@/stores/useUserStore";
export const useCommentStore = defineStore("Comment", {
  state: () => {
    return {
      comments: [],
    };
  },
  actions: {
    add(body) {
      const userStore = useUserStore();
      this.comments.push({
        author: userStore.user.name,
        body: body,
      });
    },
  },
});
