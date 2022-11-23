<script setup>
import NewsFeedDialog from "@/components/UI/news-feed/BaseDialog.vue";
import axios from "@/config/axios/index.js";
import { computed, onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";
import { useMoviesStore } from "@/stores/useMoviesStore";
import { useQuoteStore } from "@/stores/useQuoteStore";
import router from "@/router";
import i18n from "@/i18n";

const store = useMoviesStore();
const quoteStore = useQuoteStore();
const lang = computed(() => i18n.global.locale);

const quote = computed(() => quoteStore.quote);
const quoteId = ref(useRoute().params.quoteId);

const movieId = ref(useRoute().params.movieId);

onBeforeMount(() => {
  useQuoteStore().getQuote();
});

const deleteQuote = () => {
  axios
    .delete("quotes/" + quoteId.value + "/destroy")
    .then(() => {
      goBack();
      store.getMovie(movieId.value);
    })
    .catch((error) => {
      console.log(error);
    });
};

const goBack = () => {
  router.replace({ name: "movie", params: { movieId: movieId.value } });
};
</script>
<template>
  <news-feed-dialog @close="goBack">
    <template #header> Delete Quote </template>
    <loading-circle v-if="quoteStore.loading" />
    <div v-else>
      <section
        class="py-4 text-xl md:text-2xl flex justify-end h-full flex-col gap-8 text-white"
      >
        <h1 class="text-center">
          Are you sure you want to delete
          <span class="text-[#DDCCAA] font-extrabold">{{
            quote.title[lang]
          }}</span>
          ?
        </h1>
        <div class="flex justify-around">
          <base-button :orange="true" @click="deleteQuote">Yes</base-button>
          <base-button :outline="true" @click="goBack"> cancel </base-button>
        </div>
      </section>
    </div>
  </news-feed-dialog>
</template>
