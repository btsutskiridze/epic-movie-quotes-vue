<script setup>
import { computed, onMounted } from "vue";
import { useMoviesStore } from "@/stores/useMoviesStore";

const store = useMoviesStore();

const url = store.url;
const movie = computed(() => store.movie);
const genres = computed(() => store.genres);
onMounted(() => {
  store.getMovie();
});
</script>

<template>
  <loading-circle v-if="store.loading" />
  <div v-else>
    <h1>{{ movie.title?.en }}</h1>
    <img :src="movie.thumbnail && url + movie?.thumbnail" :alt="movie.name" />
    <h1>{{ movie.description?.en }}</h1>
    <h1>{{ movie.director?.en }}</h1>
    <h1>{{ movie.year }}</h1>
    <h1 class="text-2xl">movie genre:</h1>
    <h1 v-for="genre in genres" :key="genre.label">
      {{ genre }}
    </h1>
    <router-view></router-view>
  </div>
</template>
