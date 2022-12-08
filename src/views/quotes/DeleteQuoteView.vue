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
    .delete("quotes/" + quoteId.value + "?movie_id=" + movieId.value)
    .then((response) => {
      store.movie = response.data.movie;
      goBack();
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
    <template #header> {{ $t("quote.delete_quote") }} </template>
    <loading-circle v-if="quoteStore.loading" />
    <div v-else>
      <section
        class="flex h-full flex-col justify-end gap-8 py-4 text-xl text-white md:text-2xl"
      >
        <h1 class="text-center">
          {{ $t("quote.want_to_delete") }}
          <span class="break-words break-all font-extrabold text-[#DDCCAA]">{{
            quote.title[lang]
          }}</span>
          ?
        </h1>
        <div class="flex justify-around">
          <base-button :orange="true" @click="deleteQuote">{{
            $t("quote.yes")
          }}</base-button>
          <base-button :outline="true" @click="goBack">
            {{ $t("quote.cancel") }}</base-button
          >
        </div>
      </section>
    </div>
  </news-feed-dialog>
</template>
