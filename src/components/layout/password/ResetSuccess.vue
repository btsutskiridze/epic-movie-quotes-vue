<script setup>
import BaseButton from "@/components/UI/form/BaseButton.vue";
import BigSuccess from "@/components/icons/BigSuccessIcon.vue";
import { onBeforeMount } from "vue";

import { useAutoLoginStore } from "@/stores/useAutoLoginStore";
import { useResetPasswordStore } from "@/stores/useResetPasswordStore";
const store = useAutoLoginStore();
const resetPassword = useResetPasswordStore();
onBeforeMount(() => {
  store.getEmail();
});

const handleAutoLogin = () => {
  resetPassword.$patch({ resetPassword: null });
  store.autoLogin();
};
</script>

<template>
  <div class="flex flex-col items-center justify-center py-16 gap-8">
    <div class="flex flex-col items-center gap-6">
      <big-success />
      <h1 class="font-medium text-4xl text-white">
        {{ $t("passwordReset.success") }}!
      </h1>
    </div>
    <div>
      <p class="font-normal text-base text-white">
        {{ $t("passwordReset.your_password_changed_successfully") }}!
      </p>
    </div>
    <base-button
      :orange="true"
      class="w-full text-white"
      @click="handleAutoLogin"
    >
      {{ $t("passwordReset.go_to_news_feed") }}
    </base-button>
  </div>
</template>
