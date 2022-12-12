<script setup>
import PcNavbar from "@/components/layout/news-feed/navbar/PcNavbar.vue";
defineProps({
  haveMovies: {
    type: Boolean,
    required: false,
    default: false,
  },
  haveUser: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<template>
  <div class="pb-auto flex w-full items-start justify-start text-white md:pt-8">
    <div
      class="sticky top-10 hidden w-[30%] lg:block"
      :class="haveUser ? 'md:w-[40%] lg:w-[25%]' : ''"
    >
      <pc-navbar />
    </div>
    <div
      class="flex w-full flex-col md:gap-4"
      :class="[
        haveMovies ? '' : 'lg:w-[76%] xl:w-[50%]',
        haveUser ? 'lg:w-[80%]' : '',
      ]"
    >
      <slot></slot>
    </div>
  </div>
</template>
