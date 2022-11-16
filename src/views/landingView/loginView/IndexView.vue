<script setup>
import GoogleAuthorisation from "@/components/layout/auth/GoogleAuthorisation.vue";
import LoginForm from "@/components/layout/auth/LoginForm.vue";
</script>

<template>
  <div>
    <base-dialog @close="$router.push({ name: 'home' })">
      <login-form />
      <google-authorisation />
      <span class="text-[#6C757D] text-base flex justify-center py-8"
        >{{ $t("landingView.already_have_an_account") }}
        <span
          @click="$router.push({ name: 'registration' })"
          class="text-[#0D6EFD] underline cursor-pointer pl-1"
        >
          {{ $t("landingView.sign_up") }}</span
        >
      </span>
    </base-dialog>
  </div>
</template>
