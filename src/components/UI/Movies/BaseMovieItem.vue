<script setup>
import QuoteIcon from "@/components/icons/movies/QuoteIcon.vue";
import { useMoviesStore } from "@/stores/useMoviesStore";

defineProps({
  // name: {
  //   type: String,
  //   required: true,
  // },
  // date: {
  //   type: String,
  //   required: true,
  // },
  quotesNumber: {
    type: String,
    required: true,
  },
  // path: {
  //   type: String,
  //   required: true,
  //   default: "",
  // },
  movie: {
    type: Object,
    required: true,
  },
});

const store = useMoviesStore();

const url = store.url;
</script>

<template>
  <section
    class="flex flex-col gap-2 items-start cursor-pointer hover:outline hover:outline-2 hover:outline-offset-[0.8rem] rounded-xl hover:outline-[#221f34]"
  >
    <div class="w-full md:min-h-[13.75rem] max-h-[13.75rem]">
      <img
        :src="url + movie?.thumbnail"
        :alt="movie.title?.en"
        class="rounded-xl object-cover w-full h-full"
      />
    </div>
    <div>
      <h1 class="text-2xl">
        {{ movie.title?.en }} <span>({{ movie?.year }})</span>
      </h1>
    </div>
    <div class="flex flex-row gap-3 items-center">
      <p class="text-lg">{{ quotesNumber }}</p>
      <quote-icon />
    </div>
  </section>
</template>
