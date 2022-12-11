<script setup>
import BasePost from "@/components/UI/news-feed/post/BasePost.vue";
import { useQuoteStore } from "@/stores/useQuoteStore";
import { useCommentStore } from "@/stores/useCommentStore";
import { useSearchStore } from "@/stores/useSearchStore";
import { computed, onBeforeMount } from "vue";

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

onBeforeMount(() => {
  quoteStore.getQuotes("", true);
  useSearchStore().search = "";
  useCommentStore().$patch({
    comments: [],
  });
});

// window.onscroll = function () {
//   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//     if (!(quotes.value.length < quoteStore.page)) {
//       quoteStore.getQuotes("paginate");
//     }
//   }
// };

window.addEventListener("scroll", () => {
  let bottomOfWindow =
    Math.floor(
      Math.max(
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop
      ) + window.innerHeight
    ) === Math.floor(document.documentElement.offsetHeight);

  if (bottomOfWindow) {
    if (!(quotes.value.length < quoteStore.page)) {
      quoteStore.getQuotes("paginate");
    }
  }
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
