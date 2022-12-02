import { defineStore } from "pinia";
import { useUserStore } from "@/stores/useUserStore";
// import { ref } from "vue";

export const useProfileStore = defineStore("Profile", {
  state: () => {
    return {
      showButtons: false,
      nameValue: useUserStore().user.name,
      nameDisabled: true,
      passwordDisabled: true,
      passwordValue: "garbagehahahaa",
    };
  },
});
