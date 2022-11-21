<script setup>
import VerifiedEmail from "@/components/layout/verification/VerifiedEmail.vue";
</script>

<template>
  <base-dialog @close="$router.push({ name: 'landing' })">
    <verified-email />
  </base-dialog>
</template>
