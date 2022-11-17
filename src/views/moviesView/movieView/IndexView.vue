<script setup>
import { useRoute } from "vue-router";
import axios from "@/config/axios/index.js";
import { onMounted, ref } from "vue";
import { useMoviesStore } from "@/stores/useMoviesStore";

const store = useMoviesStore();

const url = store.url;
const movie = ref({});
const genres = ref([]);

onMounted(() => {
  axios.get("movies/" + useRoute().params.id).then((response) => {
    movie.value = response.data;
    genres.value = JSON.parse(movie.value.genre);
  });
});
</script>

<template>
  <div>
    <router-link :to="{ name: 'add-quote' }">add quote</router-link>
    <h1>{{ movie.title?.en }}</h1>
    <img :src="url + movie?.thumbnail" :alt="movie.name" />
    <h1>{{ movie.description?.en }}</h1>
    <h1>{{ movie.director?.en }}</h1>
    <h1>{{ movie.year }}</h1>
    <h1 class="text-2xl">movie genre:</h1>
    <h1 v-for="genre in genres" :key="genre.label">
      {{ genre }}
    </h1>
  </div>
</template>
