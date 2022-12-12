<script setup>
import { useUserStore } from "@/stores/useUserStore";
import { useProfileStore } from "@/stores/useProfileStore";
import GoBackArrow from "@/components/icons/news-feed/GoBackArrowIcon.vue";
import PrimaryEmail from "@/components/UI/user-profile/mobile/PrimaryEmail.vue";
import CommonEmail from "@/components/UI/user-profile/mobile/CommonEmail.vue";
import PlusIcon from "@/components/icons/movies/PlusIcon.vue";
import ChangeEmailDialog from "@/components/layout/user-profile/dialogs/ChangeEmailDialog.vue";
import MobileMessagePopup from "@/components/layout/user-profile/popups/MobileMessagePopup.vue";

const userStore = useUserStore();
const profileStore = useProfileStore();
</script>

<template>
  <div class="py-6 px-[7%] md:px-0">
    <go-back-arrow
      class="cursor-pointer"
      @click="profileStore.showAllEmails = false"
    />
  </div>
  <div
    v-if="!profileStore.openEmailDialog"
    class="rounded-xl bg-[#24222F] py-8"
  >
    <div class="px-[7%]">
      <primary-email
        :email="userStore.user.email"
        :google-id="userStore.user.google_id"
        :id="userStore.user.id"
        :primary="true"
      />
      <div class="my-12 flex w-full flex-col">
        <div class="flex w-full flex-col gap-6">
          <common-email
            v-for="email in userStore.user.emails"
            :key="email.id"
            :email="email.email"
            :id="email.id"
            :verified="email.email_verified_at ? true : false"
          />
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <h1>{{ $t("profile.add_new_email") }}</h1>
        <base-button
          class="mt-2 mb-8 flex w-full flex-row items-center justify-center gap-2"
          type="button"
          :outline="true"
          @click="profileStore.openEmailDialog = true"
        >
          <plus-icon />
          {{ $t("profile.add") }}
        </base-button>
      </div>
    </div>
  </div>
  <change-email-dialog
    v-if="profileStore.openEmailDialog"
    :type="profileStore.dialogType"
  />
  <mobile-message-popup />
</template>
