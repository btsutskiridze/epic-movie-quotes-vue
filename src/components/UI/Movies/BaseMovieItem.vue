<script setup>
import QuoteIcon from "@/components/icons/movies/QuoteIcon.vue";
import { ref } from "vue";

const props = defineProps({
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
  image: {
    type: String,
    required: true,
    default: "",
  },
});

const imagePath = ref(
  `${import.meta.env.VITE_BASE_URL}src/assets/images/movies/${props.image}`
);
</script>

<template>
  <section class="flex flex-col gap-2 items-start">
    <div class="w-full">
      <img :src="imagePath" :alt="name" class="rounded-xl" />
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
