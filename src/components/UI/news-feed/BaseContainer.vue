<script setup>
import PcNavbar from "@/components/layout/news-feed/navbar/PcNavbar.vue";
defineProps({
  haveMovies: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<template>
  <div class="w-full flex justify-start items-start text-white md:pt-8 pb-auto">
    <div class="w-[30%] hidden md:block sticky top-10">
      <pc-navbar />
    </div>
    <div
      class="w-full flex flex-col md:gap-4 pb-4"
      :class="haveMovies ? '' : 'md:w-[64%] lg:w-[50%]'"
    >
      <slot></slot>
    </div>
  </div>
</template>
