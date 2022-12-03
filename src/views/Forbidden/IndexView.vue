<script setup>
import GendalfIcon from "@/components/icons/GendalfIcon.vue";
</script>
<template>
  <div
    class="font-helvetica flex h-screen items-center justify-center bg-[#11101A] text-white"
  >
    <section class="z-40 flex w-full flex-col items-center gap-4">
      <gendalf-icon />
      <h1 class="text-5xl">You shall not pass!</h1>
      <p>Sorry, but you don't have permission to access this page</p>
      <router-link to="/">
        <base-button :orange="true" class="mt-4">Return home</base-button>
      </router-link>
    </section>
  </div>
</template>

<style scoped>
div {
  background: linear-gradient(
    187.16deg,
    #181623 0.07%,
    #191725 51.65%,
    #0d0b14 98.75%
  );
}
</style>
