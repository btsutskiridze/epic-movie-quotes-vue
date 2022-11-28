import { defineStore } from "pinia";
import { useUserStore } from "@/stores/useUserStore";
export const useCommentStore = defineStore("Comment", {
  state: () => {
    return {
      comments: [],
    };
  },
  actions: {
    add(username, body) {
      this.comments.push({
        author: username,
        body: body,
      });
    },
    echoComment(username, body) {
      const userStore = useUserStore();

      if (userStore.user.name !== username) {
        this.comments.push({
          author: username,
          body: body,
        });
      }
    },
  },
});
