<script setup>
import PlusIcon from "@/components/icons/movies/PlusIcon.vue";
defineProps({
  quotesNumber: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-row items-center gap-6">
    <h1>quotes (total {{ quotesNumber }})</h1>
    <router-link :to="{ name: 'add-movie-quote' }">
      <base-button
        class="flex flex-row items-center gap-3 bg-red-600 whitespace-nowrap"
      >
        <plus-icon /> {{ $t("newsFeed.write_new_quote") }}
      </base-button>
    </router-link>
  </div>
</template>
