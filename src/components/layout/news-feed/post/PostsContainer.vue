<script setup>
import BasePost from "@/components/UI/news-feed/post/BasePost.vue";
import { useQuoteStore } from "@/stores/useQuoteStore";
import { useSearchStore } from "@/stores/useSearchStore";
import { computed, onBeforeMount } from "vue";
import i18n from "@/i18n";

const lang = computed(() => i18n.global.locale);

const quoteStore = useQuoteStore();
const searchValue = computed(() => useSearchStore().search);

const quotes = computed(() =>
  quoteStore.quotes.filter((quote) => {
    const cleanSearch = searchValue.value.slice(1);

    if (searchValue.value.trim() === "") {
      return true;
    }

    if (searchValue.value.startsWith("#")) {
      return quote.title[lang.value].startsWith(cleanSearch);
    } else if (searchValue.value.startsWith("@")) {
      return quote.movie.title[lang.value].startsWith(cleanSearch);
    }

    if (
      !searchValue.value.startsWith("#") ||
      !searchValue.value.startsWith("@")
    ) {
      return quote.title[lang.value].startsWith(searchValue.value);
    }
  })
);

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
