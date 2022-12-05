<script setup>
import GhostIcon from "@/components/icons/GhostIcon.vue";
</script>
<template>
  <div
    class="font-helvetica flex h-screen items-center justify-center bg-[#11101A] text-white"
  >
    <section class="flex flex-col items-center gap-4">
      <ghost-icon />
      <h1 class="text-5xl">Whoops!</h1>
      <p>We can't see the page you are looking for</p>
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
