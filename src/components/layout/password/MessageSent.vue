<script setup>
import MessageSent from "@/components/icons/MessageSentIcon.vue";

import { useForgetPasswordStore } from "@/stores/useForgetPasswordStore";
const store = useForgetPasswordStore();

const gmail = import.meta.env.VITE_GMAIL_URL;
</script>

<template>
  <div class="flex flex-col items-center justify-center py-6 gap-8">
    <div class="flex flex-col items-center gap-6">
      <message-sent />
      <h1 class="font-medium text-4xl text-white">
        {{ $t("passwordReset.check_email") }}
      </h1>
    </div>
    <div>
      <p class="font-normal text-base text-white">
        {{ $t("passwordReset.instruction_sent") }}
      </p>
    </div>
    <a :href="gmail" target="_blank" class="w-full text-white">
      <base-button :orange="true" class="w-full">{{
        $t("verification.go_to_email")
      }}</base-button>
    </a>
    <p
      @click="
        store.$patch({ emailSent: false });
        $router.push({ name: 'home' });
      "
      class="font-normal text-base text-[#6C757D] text-center cursor-pointer"
    >
      {{ $t("passwordReset.confirm_later") }}
    </p>
  </div>
</template>
