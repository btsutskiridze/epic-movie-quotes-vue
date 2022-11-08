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
  </form>
</template>
