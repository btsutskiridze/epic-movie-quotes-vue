<script setup>
import { useUserStore } from "@/stores/useUserStore";
import { useProfileStore } from "@/stores/useProfileStore";
import { Form as VeeForm } from "vee-validate";
import { computed } from "vue";
import axios from "@/config/axios/index.js";

import ChangeDialog from "@/views/User/Inputs/Mobile/ChangeDialog.vue";
import UserImage from "@/views/User/Inputs/UserImage.vue";
import UserName from "@/views/User/Inputs/Mobile/UserName.vue";
import UserEmail from "@/views/User/Inputs/Mobile/UserEmail.vue";
import UserPassword from "@/views/User/Inputs/Mobile/UserPassword.vue";

const profileStore = useProfileStore();
const user = computed(() => useUserStore().user);

const hideOpen = () => {
  const image = document.getElementById("image-output");

  profileStore.showButtons = false;

  image.src = profileStore.defaultImage;
  profileStore.nameValue = user.value.name;
  profileStore.passwordValue = "garbagehahaha";
};

const handleImage = (values) => {
  axios
    .post(
      "user/update",
      {
        image: values.image_input,
      },
      {
        headers: { "content-type": "multipart/form-data" },
      }
    )
    .then(() => {
      useUserStore().getUser();
      profileStore.showButtons = false;
    });
};
</script>

<template>
  <VeeForm v-if="!profileStore.openDialog" @submit="handleImage">
    <div class="w-full flex flex-col gap-6">
      <section class="mt-24 relative w-full bg-[#11101A] rounded-xl">
        <user-image />
        <div class="flex flex-col mx-10 gap-9">
          <user-name />
          <user-email :email="user.email" />
          <user-password />
        </div>
      </section>
      <div class="relative">
        <div
          class="w-full flex items-center justify-center text-base gap-2 mb-6"
          v-if="profileStore.showButtons"
        >
          <base-button class="text-[#CED4DA]" @click="hideOpen">
            Cancel
          </base-button>
          <base-button :orange="true">Save changes</base-button>
        </div>
      </div>
    </div>
  </VeeForm>
  <change-dialog v-else :type="profileStore.dialogType" />
</template>
