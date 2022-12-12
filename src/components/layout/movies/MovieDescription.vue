<script setup>
import { computed } from "vue";

import i18n from "@/i18n";

import { useMoviesStore } from "@/stores/useMoviesStore";
const store = useMoviesStore();

const url = store.url;
const movie = computed(() => store.movie);
const genres = computed(() => store.genres);
const lang = computed(() => i18n.global.locale);
</script>

<template>
  <div
    class="flex flex-col gap-8 rounded-lg bg-black p-4 sm:bg-transparent sm:p-0"
  >
    <div class="flex flex-row gap-6">
      <div id="image" class="w-[40%]">
        <img
          class="h-full w-full flex-shrink-0 rounded-xl object-cover object-center"
          :src="movie?.thumbnail && url + movie?.thumbnail"
          :alt="movie?.name"
        />
      </div>
      <section class="flex w-2/4 flex-col gap-2 md:gap-4">
        <div class="flex w-full flex-row items-center justify-between">
          <h1 class="text-base text-[#DDCCAA] sm:text-2xl">
            {{ movie?.title[lang] }} ({{ movie?.year }})
          </h1>
        </div>
        <div class="flex flex-col-reverse gap-2 sm:flex-col md:gap-4">
          <div class="flex flex-wrap gap-2">
            <p
              class="rounded-[0.25rem] bg-[#6C757D] px-3 text-xs leading-6 text-white sm:text-lg md:leading-7"
              v-for="genre in genres"
              :key="genre.label"
            >
              {{ $t("genres." + genre) }}
            </p>
          </div>
          <div>
            <p class="flex flex-col gap-4 text-base sm:flex-row sm:text-lg">
              {{ $t("movies.director") }}:
              <span class="break-all">{{ movie?.director[lang] }}</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
