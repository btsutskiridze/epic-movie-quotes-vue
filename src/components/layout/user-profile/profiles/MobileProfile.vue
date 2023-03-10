<script setup>
import { useUserStore } from "@/stores/useUserStore";
import { useProfileStore } from "@/stores/useProfileStore";
import { Form as VeeForm } from "vee-validate";
import { computed } from "vue";
import axios from "@/config/axios/index.js";

import NextArrow from "@/components/icons/profile/NextArrowIcon.vue";

import MobileEmailsContainer from "@/components/layout/user-profile/MobileEmailsContainer.vue";
import ChangeDialog from "@/components/layout/user-profile/inputs/mobile/ChangeDialog.vue";
import UserImage from "@/components/layout/user-profile/inputs/UserImage.vue";
import UserName from "@/components/layout/user-profile/inputs/mobile/UserName.vue";
import UserEmail from "@/components/layout/user-profile/inputs/mobile/UserEmail.vue";
import UserPassword from "@/components/layout/user-profile/inputs/mobile/UserPassword.vue";

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
  <VeeForm
    v-if="!profileStore.openDialog && !profileStore.showAllEmails"
    @submit="handleImage"
  >
    <div class="flex w-full flex-col gap-6">
      <section class="relative mt-24 w-full rounded-xl bg-[#11101A]">
        <user-image />
        <div class="mx-10 flex flex-col gap-10 pb-14">
          <user-name />
          <user-email :email="user.email" v-if="user.google_id" />
          <user-password v-if="!user.google_id" />
          <section
            class="flex w-full cursor-pointer justify-between"
            v-if="!user.google_id"
            @click="profileStore.showAllEmails = true"
          >
            <span>{{ $t("profile.email") }}</span> <next-arrow />
          </section>
        </div>
      </section>
      <div class="relative">
        <div
          class="mb-6 flex w-full items-center justify-center gap-2 text-base"
          v-if="profileStore.showButtons"
        >
          <base-button class="text-[#CED4DA]" @click="hideOpen">
            {{ $t("profile.cancel") }}
          </base-button>
          <base-button :orange="true">
            {{ $t("profile.save_changes") }}
          </base-button>
        </div>
      </div>
    </div>
  </VeeForm>
  <mobile-emails-container v-if="profileStore.showAllEmails" />
  <change-dialog
    v-if="profileStore.openDialog"
    :type="profileStore.dialogType"
  />
</template>
