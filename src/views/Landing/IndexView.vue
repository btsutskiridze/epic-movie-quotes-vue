<script setup>
import TheHeader from "@/components/layout/TheHeader.vue";
import LandingQuotes from "@/views/Landing/LandingQuotes.vue";
import GetStarted from "@/views/Landing/GetStarted.vue";
import TheFooter from "@/components/layout/TheFooter.vue";
</script>

<template>
  <div class="font-helvetica bg-[#11101A] text-[#DDCCAA]">
    <the-header />
    <router-view></router-view>
    <get-started />
    <landing-quotes />
    <the-footer />
  </div>
</template>
