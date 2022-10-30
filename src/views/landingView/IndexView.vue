<script setup>
import TheHeader from "@/components/layout/TheHeader.vue";
import LandingQuotes from "@/views/landingView/LandingQuotes.vue";
import GetStarted from "@/views/landingView/GetStarted.vue";
import TheFooter from "@/components/layout/TheFooter.vue";
</script>

<template>
  <div class="bg-[#11101A] text-[#DDCCAA] font-helvetica">
    <the-header />
    <get-started />
    <landing-quotes />
    <the-footer />
  </div>
</template>
