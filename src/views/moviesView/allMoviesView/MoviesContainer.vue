<script setup>
import PlusIcon from "@/components/icons/movies/PlusIcon.vue";
import BaseSearch from "@/components/UI/form/BaseSearch.vue";
import BaseMovieItem from "@/components/UI/Movies/BaseMovieItem.vue";
import { computed, onMounted } from "vue";
import { useMoviesStore } from "@/stores/useMoviesStore";
import { useSearchStore } from "@/stores/useSearchStore";
import i18n from "@/i18n";

const lang = computed(() => i18n.global.locale);
const store = useMoviesStore();
const searchValue = computed(() => useSearchStore().search.trim());

const movies = computed(() =>
  store.movies.filter((movie) =>
    movie.title[lang.value].toLowerCase().startsWith(searchValue.value)
  )
);
onMounted(() => {
  store.getMovies();
  useSearchStore().search = "";
});
</script>

<template>
  <div class="mx-auto flex w-full flex-col gap-6 py-6 px-[7%] md:px-0 lg:px-5">
    <section
      class="flex w-full flex-row justify-between gap-3 md:flex-col lg:flex-row lg:items-center xs:flex-col"
    >
      <div>
        <h1 class="whitespace-nowrap">
          {{ $t("movies.my_list_of_movies") }}
          ({{ $t("movies.total") }} {{ movies.length }})
        </h1>
      </div>
      <div
        class="flex flex-col-reverse justify-start gap-6 md:flex-row xs:w-full"
      >
        <base-search class="hidden w-[60%] md:flex" />
        <router-link :to="{ name: 'add-movie' }">
          <base-button
            class="flex flex-row items-center gap-3 whitespace-nowrap bg-red-600"
          >
            <plus-icon /> {{ $t("movies.add_movie") }}
          </base-button>
        </router-link>
      </div>
    </section>

    <loading-circle v-if="store.loading" />
    <div
      v-else-if="movies.length"
      class="grid grid-cols-1 justify-center gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      <base-movie-item
        v-for="movie in movies"
        :key="movie?.id"
        :movie="movie"
        quotes-number="3"
      />
    </div>
    <div v-else>
      <h1 class="text-center text-2xl text-white">
        {{ $t("movies.no_movies_found") }}
      </h1>
    </div>
  </div>
</template>
