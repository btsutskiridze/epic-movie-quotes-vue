<script setup>
import BaseButton from "@/components/UI/form/BaseButton.vue";
import RegistrationForm from "@/components/layout/auth/RegistrationForm.vue";
import { ref } from "vue";

const showRegister = ref(false);
const modify = (options) => {
  options.forEach((option) => {
    switch (option) {
      case "closeRegister":
        showRegister.value = false;
        localStorage.setItem("showRegister", showRegister.value);
        break;

      case "openRegister":
        showRegister.value = true;
        localStorage.setItem("showRegister", showRegister.value);
        break;
    }
  });
};
</script>

<template>
  <div class="relative z-20">
    <div class="flex justify-center items-center gap-6 flex-col h-[60vh]">
      <h1
        class="w- text-2xl lg:text-[4.3rem] text-center font-bold leading-normal whitespace-pre-wrap"
      >
        {{ $t("landingView.welcome_msg") }}
      </h1>
      <base-button
        :orange="true"
        class="lg:text-2xl"
        @click="modify(['openRegister'])"
      >
        {{ $t("landingView.get_started") }}</base-button
      >
    </div>
    <RegistrationForm v-if="showRegister" @close="modify(['closeRegister'])" />
  </div>
</template>
