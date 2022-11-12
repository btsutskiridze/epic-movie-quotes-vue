<script setup>
import BasePost from "@/components/UI/news-feed/post/BasePost.vue";

import PcNavbar from "@/components/layout/news-feed/navbar/PcNavbar.vue";
import PcQuoteButton from "@/components/layout/news-feed/new-quote-button/PcQuoteButton.vue";
import MobileQuoteButton from "@/components/layout/news-feed/new-quote-button/MobileQuoteButton.vue";
import PcSearch from "@/components/layout/news-feed/search-bar/PcSearch.vue";

const quotes = [
  {
    id: 1,
    username: "bakari",
    moviename: "titanic",
    text: "titanic is big",
    comments: [
      {
        id: 1,
        username: "gela",
        text: "woooooow",
      },
      {
        id: 2,
        username: "anjelina joli",
        text: "reebs uyureb bichoo",
      },
    ],
  },
  {
    id: 2,
    username: "mziuri",
    moviename: "fight club",
    text: "second rule is remember first rule",
    comments: [
      {
        id: 1,
        username: "murmani",
        text: "thats messed upp duuude",
      },
      {
        id: 2,
        username: "anjelina joli",
        text: "brad momwere saswrafod",
      },
    ],
  },
];
</script>

<template>
  <div class="w-full flex justify-start items-start text-white md:py-8">
    <div class="w-[30%] hidden md:block sticky top-10">
      <pc-navbar />
    </div>
    <div class="w-full md:w-[64%] lg:w-[50%] flex flex-col md:gap-4 pb-4">
      <div class="flex-row items-center hidden md:flex gap-4">
        <pc-quote-button />
        <pc-search />
      </div>
      <div class="block md:hidden">
        <mobile-quote-button />
      </div>

      <div id="posts" class="flex flex-col gap-8">
        <base-post
          v-for="quote in quotes"
          :key="quote.id"
          :quote="quote"
        ></base-post>
      </div>
    </div>
  </div>
</template>
