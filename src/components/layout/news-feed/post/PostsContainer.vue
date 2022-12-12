<script setup>
import BasePost from "@/components/UI/news-feed/post/BasePost.vue";
import { useQuoteStore } from "@/stores/useQuoteStore";
import { useCommentStore } from "@/stores/useCommentStore";
import { useSearchStore } from "@/stores/useSearchStore";
import { computed, onBeforeMount, onUnmounted } from "vue";

const quoteStore = useQuoteStore();
const searchValue = computed(() => useSearchStore().search.trim());

const quotes = computed(() => {
  if (
    searchValue.value === "" ||
    searchValue.value === "#" ||
    searchValue.value === "@"
  ) {
    return quoteStore.quotes;
  } else {
    return quoteStore.searchedQuotes;
  }
});

const handlePagination = () => {
  if (
    document.documentElement.clientHeight + window.scrollY >=
    (document.documentElement.scrollHeight ||
      document.documentElement.clientHeight)
  ) {
    if (!(quotes.value.length < quoteStore.page)) {
      quoteStore.getQuotes("paginate");
    }
  }
};

onBeforeMount(() => {
  quoteStore.getQuotes("-", true);
  useSearchStore().search = "";
  useCommentStore().$patch({
    comments: [],
  });

  window.addEventListener("scroll", handlePagination);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handlePagination);
});
</script>

<template>
  <loading-circle v-if="quoteStore.loading" />
  <div v-else-if="quotes.length === 0">
    <h1 class="text-center text-2xl text-white">
      {{ $t("newsFeed.no_quotes_found") }}
    </h1>
  </div>
  <div v-else id="posts" class="flex flex-col gap-8">
    <base-post
      v-for="quote in quotes"
      :key="quote.id"
      :quote="quote"
    ></base-post>
  </div>
</template>
