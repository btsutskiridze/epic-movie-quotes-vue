<script setup>
import QuoteIcon from "@/components/icons/movies/QuoteIcon.vue";

defineProps({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  quotesNumber: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section class="flex flex-col gap-2 items-start">
    <div class="w-full">
      <img :src="path" :alt="name" class="rounded-xl" />
    </div>
    <div>
      <h1 class="text-2xl">
        {{ name }} <span>({{ date }})</span>
      </h1>
    </div>
    <div class="flex flex-row gap-3 items-center">
      <p class="text-lg">{{ quotesNumber }}</p>
      <quote-icon />
    </div>
  </section>
</template>
