import { defineStore } from "pinia";
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
  },
});
