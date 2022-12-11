<script setup>
import QuoteIcon from "@/components/icons/movies/QuoteIcon.vue";
import { useMoviesStore } from "@/stores/useMoviesStore";
import i18n from "@/i18n";
import { computed } from "vue";

const props = defineProps({
  quotesNumber: {
    type: String,
    required: true,
  },

  movie: {
    type: Object,
    required: true,
  },
});

const store = useMoviesStore();

const url = store.url;
const lang = computed(() => i18n.global.locale);

const addColor = () => {
  document.getElementById(props.movie.id).classList.add("text-[#766cab]");
};

const removeColor = () => {
  document.getElementById(props.movie.id).classList.remove("text-[#766cab]");
};
</script>

<template>
  <section
    @mouseover="addColor"
    @mouseleave="removeColor"
    @click="$router.push({ name: 'movie', params: { movieId: movie.id } })"
    class="flex cursor-pointer flex-col items-start gap-2 rounded-xl"
  >
    <div class="max-h-[13.75rem] w-full md:min-h-[13.75rem]">
      <img
        :src="url + movie?.thumbnail"
        :alt="movie.title[lang]"
        class="h-full w-full rounded-xl object-cover object-center"
      />
    </div>
    <div>
      <h1 class="text-2xl" :id="movie.id">
        {{ movie.title[lang] }} <span>({{ movie?.year }})</span>
      </h1>
    </div>
    <div class="flex flex-row items-center gap-3">
      <p class="text-lg">{{ movie.quotes.length }}</p>
      <quote-icon />
    </div>
  </section>
</template>
