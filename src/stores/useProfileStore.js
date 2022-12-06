import { defineStore } from "pinia";
import { useUserStore } from "@/stores/useUserStore";
// import { ref } from "vue";

export const useProfileStore = defineStore("Profile", {
  state: () => {
    return {
      openDialog: false,
      dialogType: "",
      showButtons: false,
      defaultImage: useUserStore().user?.avatar,
      nameValue: useUserStore().user.name,
      nameDisabled: true,
      passwordDisabled: true,
      passwordValue: "garbagehahahaa",
      changePassword: false,
      newEmailAdded: false,
    };
  },
});
