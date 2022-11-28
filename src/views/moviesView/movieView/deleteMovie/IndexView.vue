<script setup>
import NewsFeedDialog from "@/components/UI/news-feed/BaseDialog.vue";
import axios from "@/config/axios/index.js";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useMoviesStore } from "@/stores/useMoviesStore";
import router from "@/router";
import i18n from "@/i18n";

const store = useMoviesStore();
const lang = computed(() => i18n.global.locale);
const movieId = ref(useRoute().params.movieId);

const deleteMovie = () => {
  axios
    .delete("movies/" + movieId.value + "/destroy")
    .then(() => {
      store.getMovies();
      router.replace({ name: "all-movies" });
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
    <template #header> Delete movie </template>
    <section
      class="py-4 text-xl md:text-2xl flex justify-end h-full flex-col gap-8 text-white"
    >
      <h1 class="text-center">
        Are you sure you want to delete
        <span class="text-[#DDCCAA] font-extrabold">{{
          store.movie.title[lang]
        }}</span>
        ?
      </h1>
      <div class="flex justify-around">
        <base-button :orange="true" @click="deleteMovie">Yes</base-button>
        <base-button :outline="true" @click="goBack"> cancel </base-button>
      </div>
    </section>
  </news-feed-dialog>
</template>
