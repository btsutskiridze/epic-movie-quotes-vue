<script setup>
import BaseContainer from "@/components/UI/news-feed/BaseContainer.vue";

import PcQuoteButton from "@/components/layout/news-feed/new-quote-button/PcQuoteButton.vue";
import MobileQuoteButton from "@/components/layout/news-feed/new-quote-button/MobileQuoteButton.vue";
import PostsContainer from "@/components/layout/news-feed/post/PostsContainer.vue";
import PcSearch from "@/components/layout/news-feed/search-bar/PcSearch.vue";
</script>

<template>
  <base-container>
    <div class="flex-row items-center hidden md:flex gap-4">
      <pc-quote-button />
      <pc-search />
    </div>
    <div class="block md:hidden">
      <mobile-quote-button />
    </div>
    <posts-container />
  </base-container>
</template>
