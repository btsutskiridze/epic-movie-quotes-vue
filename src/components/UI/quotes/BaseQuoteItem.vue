<script setup>
import { computed } from "vue";
import i18n from "@/i18n";
import { useMoviesStore } from "@/stores/useMoviesStore";

defineProps({
  quote: {
    type: Object,
    required: true,
  },
});
const url = useMoviesStore().url;
const lang = computed(() => i18n.global.locale);
</script>

<template>
  <div class="flex felx-row">
    <img
      class="w-60 h-36 object-cover"
      :src="url + quote?.thumbnail"
      alt="quote"
    />
    <h1>{{ quote?.title[lang] }}</h1>
    <!-- <router-link :to="{ name: 'quote' }">view</router-link> -->
    <router-link
      :to="{
        name: 'edit-quote',
        params: {
          quoteId: quote.id,
        },
      }"
      >edit
    </router-link>
    <router-link
      :to="{
        name: 'delete-quote',
        params: {
          quoteId: quote.id,
        },
      }"
      >delete</router-link
    >
  </div>
</template>
