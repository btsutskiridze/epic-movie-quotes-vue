<script setup>
import LanguageDropdown from "@/components/layout/LanguageDropdown.vue";
import BaseButton from "@/components/UI/form/BaseButton.vue";
// const showRegister = ref(false);
// const showLogin = ref(false);

// onMounted(() => {
//   if (useRoute().query.token) {
//     verificationSuccess.value = true;
//     token.value = useRoute().query.token;
//   }
//   store.getResetToken();
// });

// const modify = (options) => {
//   options.forEach((option) => {
//     switch (option) {
//       case "closeRegister":
//         showRegister.value = false;
//         register.$patch({ showRegister: false });
//         localStorage.setItem("showRegister", showRegister.value);
//         break;

//       case "openRegister":
//         showRegister.value = true;
//         register.$patch({ showRegister: true });
//         localStorage.setItem("showRegister", showRegister.value);
//         break;

//       case "closeLogin":
//         showLogin.value = false;
//         forgetPassword.$patch({ emailSent: null });
//         localStorage.setItem("showLogin", showLogin.value);
//         break;

//       case "openLogin":
//         showLogin.value = true;
//         localStorage.setItem("showLogin", showLogin.value);
//         break;
//     }
//   });
// };

// const closeEmailPopup = () => {
//   verificationSuccess.value = false;
//   router.replace({ name: "home" });
// };
// const closePasswordPopup = () => {
//   store.$patch({ resetPassword: null });
//   router.replace({ name: "home" });
// };
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
          @click="$router.push('/registration')"
        >
          {{ $t("landingView.sign_up") }}
        </base-button>
        <base-button :outline="true" @click="$router.push('/login')"
          >{{ $t("landingView.log_in") }}
        </base-button>
      </div>
    </div>
  </header>
  <!-- <RegistrationForm
    v-if="showRegister || register.showRegister"
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
  <reset-success v-if="resetPassword === true" /> -->
</template>
