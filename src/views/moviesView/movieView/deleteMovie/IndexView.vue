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
    <template #header> {{ $t("movies.delete_movie") }}</template>
    <section
      class="flex h-full flex-col justify-end gap-8 py-4 text-xl text-white md:text-2xl"
    >
      <h1 class="text-center">
        {{ $t("movies.want_to_delete") }}
        <span class="font-extrabold text-[#DDCCAA]">{{
          store.movie.title[lang]
        }}</span>
        ?
      </h1>
      <div class="flex justify-around text-xl">
        <base-button :orange="true" @click="deleteMovie">{{
          $t("movies.yes")
        }}</base-button>
        <base-button :outline="true" @click="goBack">
          {{ $t("movies.cancel") }}
        </base-button>
      </div>
    </section>
  </news-feed-dialog>
</template>
