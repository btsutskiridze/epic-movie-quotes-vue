<script setup>
import LanguageDropdown from "@/components/layout/LanguageDropdown.vue";
import RegistrationForm from "@/components/layout/auth/RegistrationForm.vue";
import LoginForm from "@/components/layout/auth/LoginForm.vue";
import VerifiedEmail from "@/components/layout/verification/VerifiedEmail.vue";
import ResetSuccess from "@/components/layout/password/ResetSuccess.vue";
import ResetPassword from "@/components/layout/password/ResetPassword.vue";

import BaseButton from "@/components/UI/form/BaseButton.vue";
import { computed, onMounted, ref } from "vue";
import router from "@/router";
import { useRoute } from "vue-router";

import { useResetPassword } from "@/stores/resetPassword";
const store = useResetPassword();

const showRegister = ref(false);
const showLogin = ref(false);
const verificationSuccess = ref(false);
const resetPassword = computed(() => store.resetPassword);
const token = ref(null);

onMounted(() => {
  if (useRoute().query.token) {
    verificationSuccess.value = true;
    token.value = useRoute().query.token;
  }
  store.getResetToken();
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

const closeEmailPopup = () => {
  verificationSuccess.value = false;
  router.replace("/");
};
const closePasswordPopup = () => {
  store.$patch({ resetPassword: null });
  router.replace("/");
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
  <verified-email
    v-if="verificationSuccess"
    @close="closeEmailPopup"
    :token="token"
  />
  <ResetPassword v-if="resetPassword === false" @close="closePasswordPopup" />
  <reset-success
    v-if="resetPassword === true"
    @close="store.$patch({ resetPassword: null })"
  />
</template>
