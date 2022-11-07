<script setup>
import BaseButton from "@/components/UI/form/BaseButton.vue";
import GoogleIcon from "@/components/icons/GoogleIcon.vue";

const url = import.meta.env.VITE_API_BASE_URL + "redirect";
</script>

<template>
  <form :action="url">
    <base-button
      :outline="true"
      class="text-white w-full flex justify-center items-center gap-2"
      ><google-icon /><span>{{
        $t("landingView.sign_up_with_google")
      }}</span></base-button
    >
    <span class="text-[#6C757D] text-base flex justify-center py-8"
      >{{ $t("landingView.already_have_an_account") }}
      <span
        @click="$emit('showLogin')"
        class="text-[#0D6EFD] underline cursor-pointer pl-1"
      >
        {{ $t("landingView.log_in") }}</span
      >
    </span>
  </form>
</template>
