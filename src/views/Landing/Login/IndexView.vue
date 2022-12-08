<script setup>
import GoogleAuthorisation from "@/components/layout/auth/GoogleAuthorisation.vue";
import LoginForm from "@/components/layout/auth/LoginForm.vue";
</script>

<template>
  <div>
    <base-dialog @close="$router.push({ name: 'landing' })">
      <login-form />
      <google-authorisation />
      <span class="flex justify-center py-8 text-base text-[#6C757D]"
        >{{ $t("landingView.dont_have_account") }}
        <router-link
          :to="{ name: 'registration' }"
          class="cursor-pointer pl-1 text-[#0D6EFD] underline"
        >
          {{ $t("landingView.sign_up") }}
        </router-link>
      </span>
    </base-dialog>
  </div>
</template>
