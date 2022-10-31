<script setup>
import LanguageDropdown from "@/components/layout/LanguageDropdown.vue";
import RegistrationForm from "@/components/layout/auth/RegistrationForm.vue";
import LoginForm from "@/components/layout/auth/LoginForm.vue";
import BaseButton from "@/components/UI/form/BaseButton.vue";
import { onMounted, ref } from "vue";

const showRegister = ref(false);
const showLogin = ref(false);
onMounted(() => {
  showRegister.value = JSON.parse(localStorage.getItem("showRegister"));
  showLogin.value = JSON.parse(localStorage.getItem("showLogin"));
});

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

      case "closeLogin":
        showLogin.value = false;
        localStorage.setItem("showLogin", showLogin.value);
        break;

      case "openLogin":
        showLogin.value = true;
        localStorage.setItem("showLogin", showLogin.value);
        break;
    }
  });
};
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
          @click="modify(['openRegister'])"
        >
          {{ $t("landingView.sign_up") }}
        </base-button>
        <base-button :outline="true" @click="modify(['openLogin'])"
          >{{ $t("landingView.log_in") }}
        </base-button>
      </div>
    </div>
  </header>
  <RegistrationForm
    v-if="showRegister"
    @close="modify(['closeRegister'])"
    @showLogin="modify(['closeRegister', 'openLogin'])"
  />
  <LoginForm
    v-if="showLogin"
    @close="modify(['closeLogin'])"
    @showRegister="modify(['closeLogin', 'openRegister'])"
  />
</template>
