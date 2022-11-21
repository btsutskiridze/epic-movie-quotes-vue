<script setup>
import ResetSuccess from "@/components/layout/password/ResetSuccess.vue";
import ResetPassword from "@/components/layout/password/ResetPassword.vue";

import { useResetPasswordStore } from "@/stores/useResetPasswordStore";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
const resetPasswordStore = useResetPasswordStore();

const resetPassword = computed(() => resetPasswordStore.resetPassword);
const token = ref(null);

onMounted(() => {
  if (useRoute().query.token) {
    token.value = useRoute().query.token;
  }
  resetPasswordStore.getResetToken();
});
</script>

<template>
  <base-dialog @close="$router.push({ name: 'landing' })">
    <ResetPassword v-if="resetPassword === false" />
    <reset-success v-if="resetPassword === true" />
  </base-dialog>
</template>
