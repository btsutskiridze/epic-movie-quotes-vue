<script setup>
import BaseFileInput from "@/components/UI/news-feed/form/BaseFileInput.vue";
import BaseTextarea from "@/components/UI/form/BaseTextarea.vue";
import BaseDialogInput from "@/components/UI/dialog/BaseInput.vue";
import BaseMultiSelect from "@/components/UI/form/BaseMultiSelect.vue";
import axios from "@/config/axios/index.js";
import { Form as VeeForm } from "vee-validate";
import { useMoviesStore } from "@/stores/useMoviesStore";
import router from "@/router";

const addMovie = (values) => {
  axios
    .post(
      "movie/store",
      {
        title_en: values.title_en,
        title_ka: values.title_ka,
        genre: values.genre,
        director_en: values.director_en,
        director_ka: values.director_ka,
        description_en: values.description_en,
        description_ka: values.description_ka,
        year: JSON.parse(values.year),
        budget: JSON.parse(values.budget),
        thumbnail: values.thumbnail,
      },
      {
        headers: { "content-type": "multipart/form-data" },
      }
    )
    .then(() => {
      router.push({ name: "all-movies" });
      useMoviesStore().getMovies();
    });
};
</script>

<template>
  <news-feed-dialog @close="$router.push({ name: 'all-movies' })">
    <template #header>
      {{ $t("movies.write_new_movie") }}
    </template>
    <VeeForm @submit="addMovie">
      <section class="flex flex-col gap-4 text-white">
        <div id="user" class="flex flex-row items-center gap-4">
          <img
            src="@/assets/images/news-feed/avatar.png"
            alt="avatar"
            class="w-10 h-10"
          />
          <h1 class="">Brad spit</h1>
        </div>
        <base-dialog-input
          rules="required|eng"
          name="title_en"
          placeholder="Movie name"
          lang="Eng"
        />
        <base-dialog-input
          rules="required|geo"
          name="title_ka"
          placeholder="ფილმის სახელი"
          lang="ქარ"
        />
        <base-multi-select name="genre" />
        <base-dialog-input
          rules="required|eng"
          name="director_en"
          placeholder="Director"
          lang="Eng"
        />
        <base-dialog-input
          rules="required|geo"
          name="director_ka"
          placeholder="რეჟისორი"
          lang="ქარ"
        />
        <base-textarea
          rules="required|eng"
          name="description_en"
          placeholder="Movie description"
          lang="Eng"
        />
        <base-textarea
          rules="required|geo"
          name="description_ka"
          placeholder="ფილმის აღწერა"
          lang="ქარ"
        />
        <base-dialog-input
          rules="required|numeric"
          name="year"
          placeholder="movies.year"
        />
        <base-dialog-input
          rules="required|numeric"
          name="budget"
          placeholder="movies.budget"
        />
        <base-file-input name="thumbnail" />
        <base-button class="w-full bg-[#E31221]">{{
          $t("movies.add_movie")
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
