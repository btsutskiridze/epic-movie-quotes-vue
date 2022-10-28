<script setup>
import LanguageDropdown from "@/components/layout/LanguageDropdown.vue";

import BaseButton from "@/components/UI/BaseButton.vue";
</script>

<template>
  <header class="w-4/5 m-auto">
    <div class="flex justify-between items-center py-6 text-base">
      <h2 class="uppercase">movie quotes</h2>
      <div class="flex justify-center items-center gap-4">
        <language-dropdown />
        <base-button :orange="true" class="hidden md:block">
          Sign Up
        </base-button>
        <base-button :outline="true"> Log In </base-button>
      </div>
    </div>
  </header>
</template>
