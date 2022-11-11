<script setup>
import VerifiedEmail from "@/components/layout/verification/VerifiedEmail.vue";
</script>

<template>
  <base-dialog @close="$router.push('/')">
    <verified-email />
  </base-dialog>
</template>
