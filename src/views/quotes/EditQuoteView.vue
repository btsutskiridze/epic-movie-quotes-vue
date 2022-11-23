<script setup>
import BaseFileInput from "@/components/UI/news-feed/form/BaseFileInput.vue";
import MoviesDropdown from "@/components/UI/news-feed/form/MoviesDropdown.vue";
import BaseTextarea from "@/components/UI/form/BaseTextarea.vue";

import { computed, onBeforeMount, ref } from "vue";
import { Form as VeeForm } from "vee-validate";
import { useRoute } from "vue-router";
import axios from "@/config/axios/index.js";
import router from "@/router";
import { useMoviesStore } from "@/stores/useMoviesStore";
import { useQuoteStore } from "@/stores/useQuoteStore";

const quoteStore = useQuoteStore();

const quote = computed(() => quoteStore.quote);

const movieId = ref(useRoute().params.movieId);

onBeforeMount(() => {
  quoteStore.getQuote();
});

const goBack = () => {
  router.push({ name: "movie", params: { movieId: movieId.value } });
};

const addQuote = async (values) => {
  const data = {
    title_en: values.title_en,
    title_ka: values.title_ka,
  };

  if (values.thumbnail !== undefined) {
    data["thumbnail"] = values.thumbnail;
  }

  axios
    .post(`quotes/${quote.value.id}/update`, data, {
      headers: { "content-type": "multipart/form-data" },
    })
    .then(() => {
      goBack();
      useMoviesStore().getMovie(movieId.value);
    })
    .catch((e) => console.log(e));
};
</script>

<template>
  <news-feed-dialog @close="goBack">
    <loading-circle v-if="quoteStore.loading" />
    <VeeForm v-else @submit="addQuote" class="font-helvetica">
      <template #header>
        {{ $t("newsFeed.write_new_quote") }}
      </template>
      <section class="flex flex-col gap-4 text-white">
        <div id="user" class="flex flex-row items-center gap-4">
          <img
            src="@/assets/images/news-feed/avatar.png"
            alt="avatar"
            class="w-10 h-10"
          />
          <h1 class="">Brad spit</h1>
        </div>
        <base-textarea
          rules="required|eng-textarea"
          name="title_en"
          placeholder="Start create new Quote"
          lang="Eng"
          :model="quote.title?.en"
        />
        <base-textarea
          rules="required|geo-textarea"
          name="title_ka"
          placeholder="დაიწყე ახალი ციტატის დამატება"
          lang="ქარ"
          :model="quote.title?.ka"
        />
        <base-file-input name="thumbnail" rules="" />
        <movies-dropdown :only-one="true" />
        <base-button class="w-full bg-[#E31221]">Post</base-button>
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
