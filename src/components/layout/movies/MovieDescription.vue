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
    class="rounded-lg p-4 sm:p-0 bg-black sm:bg-transparent flex flex-col gap-8"
  >
    <div class="flex flex-row gap-6">
      <div id="image">
        <img
          class="flex-shrink-0 w-full h-full max-w-[18.1rem] max-h-[9.8rem] object-cover rounded-xl"
          :src="movie?.thumbnail && url + movie?.thumbnail"
          :alt="movie?.name"
        />
      </div>
      <section class="flex flex-col gap-2 md:gap-4 w-2/4">
        <div class="w-full flex flex-row justify-between items-center">
          <h1 class="text-base sm:text-2xl text-[#DDCCAA]">
            {{ movie?.title[lang] }} ({{ movie?.year }})
          </h1>
        </div>
        <div class="flex flex-col-reverse sm:flex-col gap-2 md:gap-4">
          <div class="flex flex-wrap gap-2">
            <p
              class="bg-[#6C757D] text-white text-xs leading-6 md:leading-7 sm:text-lg rounded-[0.25rem] px-3"
              v-for="genre in genres"
              :key="genre.label"
            >
              {{ genre }}
            </p>
          </div>
          <div>
            <p class="flex flex-col sm:flex-row gap-row-4 text-base sm:text-lg">
              Director:
              <span class="break-all">{{ movie?.director[lang] }}</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
