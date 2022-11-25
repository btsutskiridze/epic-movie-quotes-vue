<script setup>
import BaseQuoteItem from "@/components/UI/quotes/BaseQuoteItem.vue";

import { useMoviesStore } from "@/stores/useMoviesStore";
import { computed } from "vue";

const moviesStore = useMoviesStore();
const quotes = computed(() => moviesStore.movie.quotes);
</script>

<template>
  <div class="flex flex-col gap-6 md:px-5 mt-6">
    <base-quote-item :quote="quote" v-for="quote in quotes" :key="quote.id" />
  </div>
</template>
