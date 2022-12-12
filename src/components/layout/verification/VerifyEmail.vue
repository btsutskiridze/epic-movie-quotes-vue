<script setup>
import MessageSent from "@/components/icons/MessageSentIcon.vue";

const gmail = import.meta.env.VITE_GMAIL_URL;
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-8 py-16">
    <div class="flex flex-col items-center gap-6">
      <message-sent />
      <h1 class="text-4xl font-medium text-white">
        {{ $t("verification.thank_you") }}
      </h1>
    </div>
    <div>
      <p class="text-base font-normal text-white">
        {{ $t("verification.verification_sent") }}
      </p>
    </div>
    <a :href="gmail" class="w-full text-white">
      <base-button :orange="true" class="w-full">{{
        $t("verification.go_to_email")
      }}</base-button>
    </a>
  </div>
</template>
