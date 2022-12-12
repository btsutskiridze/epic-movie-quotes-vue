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
    scrollToBottom() {
      const nestedElement = document.getElementById("comments-container");
      nestedElement.scrollTo(0, nestedElement.scrollHeight);
    },
  },
});
