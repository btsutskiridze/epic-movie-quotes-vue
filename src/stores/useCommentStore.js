import { defineStore } from "pinia";
import { useUserStore } from "@/stores/useUserStore";
export const useCommentStore = defineStore("Comment", {
  state: () => {
    return {
      comments: [],
    };
  },
  actions: {
    add(id, username, body) {
      this.comments.push({
        quote_id: id,
        author: username,
        body: body,
      });
    },
    echoComment(id, thisId, username, body) {
      const userStore = useUserStore();

      if (userStore.user.name !== username && thisId !== id) {
        this.comments.push({
          quote_id: id,
          author: username,
          body: body,
        });
      }
    },
  },
});
