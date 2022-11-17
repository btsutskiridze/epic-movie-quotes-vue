<script setup>
import { useRoute } from "vue-router";
import axios from "@/config/axios/index.js";
import { ref } from "vue";

const movie = ref({});

axios.get("movies/" + useRoute().params.id).then((response) => {
  movie.value = response.data;
});
</script>

<template>
  <div>
    <h1>{{ movie.title?.en }}</h1>
    <h1>{{ movie.description?.en }}</h1>
    <h1>{{ movie.director?.en }}</h1>
    <h1>{{ movie.year }}</h1>
  </div>
</template>
