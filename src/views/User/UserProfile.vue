<script setup>
import MobileProfile from "@/views/User/Responsive/MobileProfile.vue";
import PcProfile from "@/views/User/Responsive/PcProfile.vue";
import { ref } from "vue";

const pageWidth = ref(window.innerWidth);

window.addEventListener("resize", () => {
  pageWidth.value = window.innerWidth;
});
</script>

<template>
  <pc-profile v-if="pageWidth > 768" />
  <mobile-profile v-else />
</template>
