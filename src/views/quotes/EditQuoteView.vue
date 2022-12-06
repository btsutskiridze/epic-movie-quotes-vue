<script setup>
import DeleteIcon from "@/components/icons/movies/DeleteIcon.vue";
import MoviesDropdown from "@/components/UI/news-feed/form/MoviesDropdown.vue";
import BaseTextarea from "@/components/UI/form/BaseTextarea.vue";
import QuotesFileInput from "@/components/UI/quotes/BaseQuotesFileInput.vue";

import { computed, onBeforeMount, ref } from "vue";
import { Form as VeeForm } from "vee-validate";
import { useRoute } from "vue-router";
import axios from "@/config/axios/index.js";
import router from "@/router";
import { useMoviesStore } from "@/stores/useMoviesStore";
import { useQuoteStore } from "@/stores/useQuoteStore";
import { useUserStore } from "@/stores/useUserStore";

const quoteStore = useQuoteStore();

const quote = computed(() => quoteStore.quote);

const movieId = ref(useRoute().params.movieId);

onBeforeMount(() => {
  quoteStore.getQuote();
});

const goBack = () => {
  router.replace({ name: "movie", params: { movieId: movieId.value } });
};

const editQuote = async (values) => {
  const data = {
    movie_id: movieId.value,
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
    .then((response) => {
      goBack();
      useMoviesStore().movie = response.data.movie;
    })
    .catch((e) => console.log(e));
};
</script>

<template>
  <news-feed-dialog @close="goBack">
    <template #header>
      <div
        class="absolute flex flex-row items-center rounded-lg py-2 text-[#CED4DA]"
      >
        <div
          class="flex cursor-pointer flex-row items-end gap-2 px-4"
          @click="
            $router.replace({
              name: 'delete-quote',
              params: {
                quoteId: quote.id,
              },
            })
          "
        >
          <delete-icon class="h-4 w-4" />
          <span class="text-base leading-none">{{ $t("quote.delete") }}</span>
        </div>
      </div>
      {{ $t("quote.edit_quote") }}
    </template>
    <loading-circle v-if="quoteStore.loading" />
    <VeeForm v-else @submit="editQuote" class="font-helvetica">
      <section class="flex flex-col gap-4 text-white">
        <div id="user" class="flex flex-row items-center gap-4">
          <img
            :src="useUserStore().user?.avatar"
            alt="avatar"
            class="h-10 w-10 rounded-full object-cover"
          />
          <h1 class="">{{ useUserStore().user.name }}</h1>
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
        <quotes-file-input
          :path="quoteStore.url + quote.thumbnail"
          name="thumbnail"
          rules=""
        />
        <movies-dropdown :only-one="true" />
        <base-button class="w-full bg-[#E31221]">{{
          $t("quote.save_changes")
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
