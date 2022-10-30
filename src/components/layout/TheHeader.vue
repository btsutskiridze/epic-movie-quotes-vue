<script setup>
import LanguageDropdown from "@/components/layout/LanguageDropdown.vue";
import RegistrationForm from "@/components/layout/form/RegistrationForm.vue";
import BaseButton from "@/components/UI/BaseButton.vue";
import { provide, ref } from "vue";

const show = ref(false);
const openRegistration = () => {
  show.value = true;
};
provide("show", show);
</script>

<template>
  <header class="w-4/5 m-auto">
    <div class="flex justify-between items-center py-6 text-base">
      <h2 class="font-bold uppercase">{{ $t("landingView.movie_quotes") }}</h2>
      <div class="flex justify-center items-center gap-4">
        <language-dropdown />
        <base-button
          :orange="true"
          class="hidden md:block"
          @click="openRegistration"
        >
          {{ $t("landingView.sign_up") }}
        </base-button>
        <base-button :outline="true"
          >{{ $t("landingView.log_in") }}
        </base-button>
      </div>
    </div>
  </header>
  <RegistrationForm />
</template>
