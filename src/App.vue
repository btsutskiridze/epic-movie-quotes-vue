<script setup>
import i18n from "@/i18n.js";
import { setLocale } from "@vee-validate/i18n";
import { onMounted } from "vue";

onMounted(() => {
  if (localStorage.locale) {
    i18n.global.locale = localStorage.locale;
    setLocale(localStorage.locale);
  }
});
</script>

<template>
  <router-view />
</template>

<style>
html {
  overflow-y: scroll;
  overflow-y: overlay;
}

::-webkit-scrollbar {
  width: 2px;
  height: 10px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(90, 90, 90);
}
</style>
