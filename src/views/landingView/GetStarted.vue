<script setup>
import BaseButton from "@/components/UI/form/BaseButton.vue";
</script>

<template>
  <div class="relative z-20">
    <div class="flex justify-center items-center gap-6 flex-col h-[60vh]">
      <h1
        class="w- text-2xl lg:text-[4.3rem] text-center font-bold leading-normal whitespace-pre-wrap"
      >
        {{ $t("landingView.welcome_msg") }}
      </h1>
      <base-button :orange="true" class="lg:text-2xl">
        {{ $t("landingView.get_started") }}</base-button
      >
    </div>
  </div>
</template>
