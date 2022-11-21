<script setup>
import BackArrowIcon from "@/components/icons/BackArrowIcon.vue";

import VerifyEmail from "@/components/layout/verification/VerifyEmail.vue";
import GoogleAuthorisation from "@/components/layout/auth/GoogleAuthorisation.vue";
import RegisterForm from "@/components/layout/auth/RegisterForm.vue";
import { useRegisterStore } from "@/stores/useRegisterStore";
import { computed } from "vue";
const store = useRegisterStore();
const loading = computed(() => store.loading);
</script>

<template>
  <div>
    <base-dialog @close="$router.push({ name: 'landing' })">
      <router-link
        :to="{ name: 'landing' }"
        class="block sm:hidden absolute top-[4%] cursor-pointer py-2 pr-2"
        v-if="loading === null || loading === false"
      >
        <back-arrow-icon />
      </router-link>
      <register-form v-if="loading === null" />
      <google-authorisation v-if="loading === null" />
      <span
        class="text-[#6C757D] text-base flex justify-center py-8"
        v-if="loading === null"
        >{{ $t("landingView.already_have_an_account") }}
        <router-link
          :to="{ name: 'login' }"
          class="text-[#0D6EFD] underline cursor-pointer pl-1"
        >
          {{ $t("landingView.log_in") }}
        </router-link>
      </span>
      <loading-circle v-if="loading === true" />
      <verify-email v-else-if="loading === false" />
    </base-dialog>
  </div>
</template>
