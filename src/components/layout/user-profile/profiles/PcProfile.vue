<script setup>
import { useUserStore } from "@/stores/useUserStore";
import { useProfileStore } from "@/stores/useProfileStore";
import { computed, onMounted } from "vue";
import { Form as VeeForm } from "vee-validate";
import { setRegisterApiError } from "@/helpers/api-error-message";
import axios from "@/config/axios/index.js";

import PlusIcon from "@/components/icons/movies/PlusIcon.vue";
import MessagePopup from "@/components/layout/user-profile/popups/PcMessagePopup.vue";

import UserImage from "@/components/layout/user-profile/inputs/UserImage.vue";
import UserName from "@/components/layout/user-profile/inputs/pc/UserName.vue";
import UserEmail from "@/components/layout/user-profile/inputs/pc/UserEmail.vue";
import UserPassword from "@/components/layout/user-profile/inputs/pc/UserPassword.vue";
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
          <user-email
            :email="user.email"
            :google-id="user.google_id"
            :id="user.id"
            :primary="true"
          />
          <div class="mb-4 flex flex-col gap-4" v-if="!user.google_id">
            <user-email
              v-for="email in user.emails"
              :key="email.id"
              :email="email.email"
              :id="email.id"
              :verified="email.email_verified_at ? true : false"
            />

            <div class="w-[65%] border-b border-[#40414A] 2xl:w-[63%]">
              <router-link :to="{ name: 'add-email' }">
                <base-button
                  class="mt-2 mb-8 flex w-max flex-row items-center gap-2"
                  type="button"
                  :outline="true"
                >
                  <plus-icon />
                  {{ $t("profile.add_new_email") }}
                </base-button>
              </router-link>
            </div>
          </div>
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
    <message-popup />
  </VeeForm>
  <router-view></router-view>
</template>
