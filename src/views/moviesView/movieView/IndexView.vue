<script setup>
import { computed, onBeforeMount } from "vue";

import i18n from "@/i18n";

import QuotesContainer from "@/components/layout/quotes/QuotesContainer.vue";
import AddMovieQuote from "@/components/layout/quotes/AddMovieQuote.vue";

import EditIcon from "@/components/icons/movies/EditIcon.vue";
import DeleteIcon from "@/components/icons/movies/DeleteIcon.vue";
import { useMoviesStore } from "@/stores/useMoviesStore";
const store = useMoviesStore();

const url = store.url;
const movie = computed(() => store.movie);
const genres = computed(() => store.genres);
const lang = computed(() => i18n.global.locale);
onBeforeMount(() => {
  store.getMovie();
});

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
</script>

<template>
  <loading-circle v-if="store.loading" />
  <div v-else class="mt-8 flex flex-col gap-8 px-[7%] md:mt-0 md:px-5">
    <div class="flex w-full flex-col gap-4">
      <h1 class="hidden text-2xl md:block">
        {{ $t("movies.movie_description") }}
      </h1>
      <div class="flex flex-col gap-6 lg:flex-row">
        <div class="flex h-full w-full lg:w-3/5" id="image">
          <img
            class="h-[40vh] max-h-[24rem] w-full flex-shrink-0 rounded-xl object-cover object-center"
            :src="movie?.thumbnail && url + movie?.thumbnail"
            :alt="movie?.name"
          />
        </div>
        <section class="flex w-full flex-col gap-4 lg:w-2/4">
          <div class="flex w-full flex-row items-center justify-between">
            <h1 class="text-2xl text-[#DDCCAA]">
              {{ movie?.title[lang] }} ({{ movie?.year }})
            </h1>
            <div class="flex flex-row rounded-lg bg-[#24222F] py-2">
              <div
                class="cursor-pointer border-r border-white px-4"
                @click="$router.replace({ name: 'edit-movie' })"
              >
                <edit-icon class="h-5 w-5" />
              </div>
              <div
                class="cursor-pointer px-4"
                @click="$router.replace({ name: 'delete-movie' })"
              >
                <delete-icon class="h-5 w-5" />
              </div>
            </div>
          </div>
          <div class="flex flex-wrap gap-2">
            <p
              class="rounded-[0.25rem] bg-[#6C757D] px-3 text-lg text-white"
              v-for="genre in genres"
              :key="genre.label"
            >
              {{ $t("genres." + genre) }}
            </p>
          </div>
          <div>
            <p class="flex flex-row gap-4">
              Director: <span>{{ movie?.director[lang] }}</span>
            </p>
          </div>
          <div>
            <p class="flex flex-row gap-4">
              Budget: <span>{{ numberWithCommas(movie?.budget) }}$</span>
            </p>
          </div>
          <div>
            <p>
              {{ movie?.description[lang] }}
            </p>
          </div>
        </section>
      </div>
    </div>
    <add-movie-quote :quotes-number="movie.quotes.length" />
    <router-view></router-view>
  </div>
  <quotes-container />
</template>
