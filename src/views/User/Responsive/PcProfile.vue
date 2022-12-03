<script setup>
import { useUserStore } from "@/stores/useUserStore";
import { useProfileStore } from "@/stores/useProfileStore";
import { computed, onMounted } from "vue";
import { Form as VeeForm } from "vee-validate";
import { setRegisterApiError } from "@/helpers/api-error-message";
import axios from "@/config/axios/index.js";

import UserImage from "@/views/User/Inputs/UserImage.vue";
import UserName from "@/views/User/Inputs/Pc/UserName.vue";
import UserEmail from "@/views/User/Inputs/Pc/UserEmail.vue";
import UserPassword from "@/views/User/Inputs/Pc/UserPassword.vue";
const profileStore = useProfileStore();
const user = computed(() => useUserStore().user);

const hideOpen = (type) => {
  const image = document.getElementById("image-output");

  profileStore.showButtons = false;

  profileStore.nameDisabled = true;
  profileStore.passwordDisabled = true;
  profileStore.changePassword = false;

  if (type != "change") {
    profileStore.nameValue = useUserStore().user.name;
  }
};

onMounted(() => {
  profileStore.showButtons = false;
  profileStore.nameDisabled = true;
  profileStore.passwordDisabled = true;
  profileStore.changePassword = false;
});

const updateProfile = (values, actions) => {
  const data = {};
  if (values.name !== user.value.name) {
    data["name"] = values.name;
  }
  if (values.image_input) {
    data["image"] = values.image_input;
  }

  if (values.password) {
    data["password"] = values.password;
  }
  axios
    .post("user/update", data, {
      headers: { "content-type": "multipart/form-data" },
    })
    .then(() => {
      useUserStore().getUser();
      hideOpen("change");
    })
    .catch((e) => {
      const errorsObj = e.response.data.errors;
      for (const errorName in errorsObj) {
        setRegisterApiError(errorName, actions);
      }
    });
};
</script>

<template>
  <VeeForm @submit="updateProfile">
    <div class="w-full flex flex-col gap-6 pb-20">
      <h1 class="text-2xl ml-8 mb-24">My profile</h1>
      <section class="relative w-full bg-[#11101A] rounded-xl">
        <user-image />
        <div class="flex flex-col mx-20 2xl:mx-40 gap-9">
          <user-name />
          <user-email :email="user.email" :google-id="user.google_id" />
          <user-password v-if="!user.google_id" />
        </div>
      </section>
      <div class="relative">
        <div
          class="absolute right-0 flex items-center text-base gap-6"
          v-if="profileStore.showButtons"
        >
          <p class="cursor-pointer text-[#CED4DA]" @click="hideOpen">Cancel</p>
          <base-button :orange="true">Save changes</base-button>
        </div>
      </div>
    </div>
  </VeeForm>
</template>
