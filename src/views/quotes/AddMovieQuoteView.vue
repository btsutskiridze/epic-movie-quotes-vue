<script setup>
import BaseFileInput from "@/components/UI/news-feed/form/BaseFileInput.vue";
import MoviesDropdown from "@/components/UI/news-feed/form/MoviesDropdown.vue";
import MovieDescription from "@/components/layout/movies/MovieDescription.vue";
import BaseTextarea from "@/components/UI/form/BaseTextarea.vue";

import { ref } from "vue";
import { Form as VeeForm } from "vee-validate";
import { useRoute, useRouter } from "vue-router";
import axios from "@/config/axios/index.js";
import router from "@/router";
import { useMoviesStore } from "@/stores/useMoviesStore";
import { useUserStore } from "@/stores/useUserStore";
const currRoute = ref(useRouter().currentRoute.value.path);
const movieId = ref(useRoute().params.movieId);

const goBack = () => {
  if (currRoute.value.includes("movies")) {
    router.push({ name: "movie", params: { movieId: movieId.value } });
  } else {
    router.push({ name: "news-feed" });
  }
};

const addQuote = async (values) => {
  axios
    .post(
      "quote/store",
      {
        movie_id: movieId.value,
        title_en: values.title_en,
        title_ka: values.title_ka,
        thumbnail: values.thumbnail,
      },
      {
        headers: { "content-type": "multipart/form-data" },
      }
    )
    .then((response) => {
      // useMoviesStore().getMovie(movieId.value);
      useMoviesStore().movie = response.data.movie;
      goBack();
    });
};
</script>

<template>
  <news-feed-dialog @close="goBack">
    <template #header>
      {{ $t("newsFeed.write_new_quote") }}
    </template>
    <VeeForm @submit="addQuote" class="font-helvetica">
      <section class="flex flex-col gap-4 text-white">
        <div id="user" class="flex flex-row items-center gap-4">
          <img
            :src="useUserStore().user?.avatar"
            alt="avatar"
            class="h-10 w-10 rounded-full object-cover"
          />
          <h1 class="">{{ useUserStore().user.name }}</h1>
        </div>
        <movie-description />

        <base-textarea
          rules="required|eng-textarea"
          name="title_en"
          placeholder="Start create new Quote"
          lang="Eng"
        />
        <base-textarea
          rules="required|geo-textarea"
          name="title_ka"
          placeholder="დაიწყე ახალი ციტატის დამატება"
          lang="ქარ"
        />
        <base-file-input name="thumbnail" />
        <movies-dropdown :only-one="true" />
        <base-button class="w-full bg-[#E31221]">{{
          $t("newsFeed.add_quote")
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
