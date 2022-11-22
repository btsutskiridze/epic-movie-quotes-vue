<script setup>
import { computed, onBeforeMount } from "vue";
import { useMoviesStore } from "@/stores/useMoviesStore";
import i18n from "@/i18n";

import QuotesContainer from "@/components/layout/quotes/QuotesContainer.vue";

import PlusIcon from "@/components/icons/movies/PlusIcon.vue";
import EditIcon from "@/components/icons/news-feed/EditIcon.vue";
import DeleteIcon from "@/components/icons/movies/DeleteIcon.vue";
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
  <div v-else class="flex flex-col gap-8 mt-8 md:mt-0 px-[7%] md:px-5 mx-auto">
    <div class="flex w-full flex-col gap-4">
      <h1 class="text-2xl hidden md:block">
        {{ $t("movies.movie_description") }}
      </h1>
      <div class="flex flex-col lg:flex-row gap-6">
        <div class="flex w-full lg:w-3/5 h-full" id="image">
          <img
            class="flex-shrink-0 h-[40vh] max-h-[24rem] w-full object-cover rounded-xl"
            :src="movie?.thumbnail && url + movie?.thumbnail"
            :alt="movie?.name"
          />
        </div>
        <section class="flex flex-col gap-4 w-full lg:w-2/4">
          <div class="w-full flex flex-row justify-between items-center">
            <h1 class="text-2xl text-[#DDCCAA]">
              {{ movie?.title[lang] }} ({{ movie?.year }})
            </h1>
            <div class="flex flex-row rounded-lg py-2 bg-[#24222F]">
              <div
                class="cursor-pointer border-r border-white px-4"
                @click="$router.replace({ name: 'edit-movie' })"
              >
                <edit-icon class="w-5 h-5" />
              </div>
              <div
                class="cursor-pointer px-4"
                @click="$router.replace({ name: 'delete-movie' })"
              >
                <delete-icon class="w-5 h-5" />
              </div>
            </div>
          </div>
          <div class="flex flex-wrap gap-2">
            <p
              class="bg-[#6C757D] text-white text-lg rounded-[0.25rem] px-3"
              v-for="genre in genres"
              :key="genre.label"
            >
              {{ genre }}
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
    <div class="flex flex-row items-center gap-6">
      <h1>quotes (total 7)</h1>
      <router-link :to="{ name: 'add-movie-quote' }">
        <base-button
          class="flex flex-row items-center gap-3 bg-red-600 whitespace-nowrap"
        >
          <plus-icon /> {{ $t("newsFeed.write_new_quote") }}
        </base-button>
      </router-link>
    </div>
    <quotes-container />
    <router-view></router-view>
  </div>
</template>
