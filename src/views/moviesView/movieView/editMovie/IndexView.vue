<script setup>
import BaseFileInput from "@/components/UI/news-feed/form/BaseFileInput.vue";
import BaseTextarea from "@/components/UI/form/BaseTextarea.vue";
import BaseDialogInput from "@/components/UI/dialog/BaseInput.vue";
import BaseMultiSelect from "@/components/UI/form/BaseMultiSelect.vue";
import axios from "@/config/axios/index.js";
import { Form as VeeForm } from "vee-validate";
import { useMoviesStore } from "@/stores/useMoviesStore";
import { useUserStore } from "@/stores/useUserStore";
import router from "@/router";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

const store = useMoviesStore();

const movie = computed(() => store.movie);
const movieGenres = store.genres;
const movieId = ref(useRoute().params.movieId);

const updateMovie = (values) => {
  const data = {
    title_en: values.title_en,
    title_ka: values.title_ka,
    director_en: values.director_en,
    director_ka: values.director_ka,
    description_en: values.description_en,
    description_ka: values.description_ka,
    year: values.year,
    budget: values.budget,
  };

  if (values.thumbnail !== undefined) {
    data["thumbnail"] = values.thumbnail;
  }
  if (values.genre !== undefined) {
    data["genre"] = values.genre;
  }

  axios
    .post(`movies/${movieId.value}/update`, data, {
      headers: { "content-type": "multipart/form-data" },
    })
    .then(() => {
      goBack();
      store.getMovie(movieId.value);
    })
    .catch((e) => console.log(e));
};

const goBack = () => {
  router.replace({ name: "movie", params: { movieId: movieId.value } });
};
</script>

<template>
  <news-feed-dialog @close="goBack">
    <template #header>
      {{ $t("movies.edit_movie") }}
    </template>
    <VeeForm @submit="updateMovie">
      <section class="flex flex-col gap-4 text-white">
        <div id="user" class="flex flex-row items-center gap-4">
          <img
            :src="useUserStore().user?.avatar"
            alt="avatar"
            class="h-10 w-10 rounded-full object-cover"
          />
          <h1 class="">{{ useUserStore().user.name }}</h1>
        </div>
        <base-dialog-input
          rules="required|eng"
          name="title_en"
          placeholder="Movie name"
          lang="Eng"
          :model="movie.title['en']"
        />
        <base-dialog-input
          rules="required|geo"
          name="title_ka"
          placeholder="ფილმის სახელი"
          lang="ქარ"
          :model="movie.title['ka']"
        />
        <base-multi-select name="genre" :values="movieGenres" />
        <base-dialog-input
          rules="required|eng"
          name="director_en"
          placeholder="Director"
          lang="Eng"
          :model="movie.director['en']"
        />
        <base-dialog-input
          rules="required|geo"
          name="director_ka"
          placeholder="რეჟისორი"
          lang="ქარ"
          :model="movie.director['ka']"
        />
        <base-textarea
          rules="required|eng-textarea"
          name="description_en"
          placeholder="Movie description"
          lang="Eng"
          :model="movie.description['en']"
        />
        <base-textarea
          rules="required|geo-textarea"
          name="description_ka"
          placeholder="ფილმის აღწერა"
          lang="ქარ"
          :model="movie.description['ka']"
        />
        <base-dialog-input
          rules="required|numeric"
          name="year"
          placeholder="movies.year"
          :model="JSON.stringify(movie.year)"
        />
        <base-dialog-input
          rules="required|numeric"
          name="budget"
          placeholder="movies.budget"
          :model="JSON.stringify(movie.budget)"
        />
        <base-file-input name="thumbnail" rules="" />
        <base-button class="w-full bg-[#E31221]">{{
          $t("movies.edit_movie")
        }}</base-button>
      </section>
    </VeeForm>
  </news-feed-dialog>
</template>

<style scoped>
::-webkit-input-placeholder {
  font-style: italic;
}
:-moz-placeholder {
  font-style: italic;
}
::-moz-placeholder {
  font-style: italic;
}
:-ms-input-placeholder {
  font-style: italic;
}
</style>
