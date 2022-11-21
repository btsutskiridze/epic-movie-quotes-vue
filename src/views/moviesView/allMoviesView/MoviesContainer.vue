<script setup>
import PlusIcon from "@/components/icons/movies/PlusIcon.vue";
import BaseSearch from "@/components/UI/form/BaseSearch.vue";
import BaseMovieItem from "@/components/UI/Movies/BaseMovieItem.vue";
import { computed, onMounted } from "vue";
import { useMoviesStore } from "@/stores/useMoviesStore";

const store = useMoviesStore();

const movies = computed(() => store.movies);
onMounted(() => {
  store.getMovies();
});
</script>

<template>
  <div class="container py-6 px-[7%] md:px-5 flex flex-col gap-6 mx-auto">
    <base-search class="flex md:hidden" />
    <section
      class="flex xs:flex-col flex-row justify-between items-center w-full gap-3"
    >
      <div>
        <h1 class="whitespace-nowrap">
          {{ $t("movies.my_list_of_movies") }}
          ({{ $t("movies.total") }} {{ movies.length }})
        </h1>
      </div>
      <div
        class="flex flex-col-reverse md:flex-row justify-start gap-4 xs:w-full"
      >
        <base-search class="hidden md:flex" />
        <router-link :to="{ name: 'add-movie' }">
          <base-button
            class="flex flex-row items-center gap-3 bg-red-600 whitespace-nowrap"
          >
            <plus-icon /> {{ $t("movies.add_movie") }}
          </base-button>
        </router-link>
      </div>
    </section>

    <loading-circle v-if="store.loading" />
    <div v-else class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <base-movie-item
        v-for="movie in movies"
        :key="movie?.id"
        :movie="movie"
        quotes-number="3"
      />
    </div>
  </div>
</template>
