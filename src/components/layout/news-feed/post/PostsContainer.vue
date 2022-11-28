<script setup>
import BasePost from "@/components/UI/news-feed/post/BasePost.vue";
import { useQuoteStore } from "@/stores/useQuoteStore";
import { computed, onBeforeMount } from "vue";

const quoteStore = useQuoteStore();

const quotes = computed(() => quoteStore.quotes);

onBeforeMount(() => {
  quoteStore.getQuotes();
});
</script>

<template>
  <loading-circle v-if="quoteStore.loading" />
  <div v-else id="posts" class="flex flex-col gap-8">
    <base-post
      v-for="quote in quotes"
      :key="quote.id"
      :quote="quote"
    ></base-post>
  </div>
</template>
