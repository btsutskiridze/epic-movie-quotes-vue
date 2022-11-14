<script setup>
import PcNavbar from "@/components/layout/news-feed/navbar/PcNavbar.vue";
</script>

<template>
  <div class="w-full flex justify-start items-start text-white md:py-8">
    <div class="w-[30%] hidden md:block sticky top-10">
      <pc-navbar />
    </div>
    <div class="w-full md:w-[64%] lg:w-[50%] flex flex-col md:gap-4 pb-4">
      <slot></slot>
    </div>
  </div>
</template>
