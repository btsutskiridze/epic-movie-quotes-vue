<script setup>
import ForgetPassword from "@/components/layout/password/ForgetPassword.vue";
import MessageSent from "@/components/layout/password/MessageSent.vue";
import BaseDialog from "@/components/UI/BaseDialog.vue";

import { useForgetPasswordStore } from "@/stores/useForgetPasswordStore";
import { useResetPasswordStore } from "@/stores/useResetPasswordStore";
import { computed, onMounted } from "vue";
const store = useForgetPasswordStore();
const resetPasswordStore = useResetPasswordStore();

const emailSent = computed(() => store.emailSent);

onMounted(() => {
  resetPasswordStore.getResetToken();
});
</script>

<template>
  <base-dialog
    @close="
      store.$patch({ emailSent: false });
      $router.push({ name: 'home' });
    "
  >
    <forget-password v-if="emailSent === false" />
    <message-sent v-if="emailSent === true" />
  </base-dialog>
</template>
