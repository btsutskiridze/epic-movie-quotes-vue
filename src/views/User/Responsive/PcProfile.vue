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
    <div class="flex w-full flex-col gap-6 pb-20">
      <h1 class="ml-8 mb-24 text-2xl">
        {{ $t("profile.my_profile") }}
      </h1>
      <section class="relative w-full rounded-xl bg-[#11101A]">
        <user-image />
        <div class="mx-20 flex flex-col gap-9 2xl:mx-40">
          <user-name />
          <user-email :email="user.email" :google-id="user.google_id" />
          <user-password v-if="!user.google_id" />
        </div>
      </section>
      <div class="relative">
        <div
          class="absolute right-0 flex items-center gap-6 text-base"
          v-if="profileStore.showButtons"
        >
          <p class="cursor-pointer text-[#CED4DA]" @click="hideOpen">
            {{ $t("profile.cancel") }}
          </p>
          <base-button :orange="true">
            {{ $t("profile.save_changes") }}
          </base-button>
        </div>
      </div>
    </div>
  </VeeForm>
</template>
