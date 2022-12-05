<script setup>
import MovieIcon from "@/components/icons/dialog/MovieIcon.vue";
import DownArrow from "@/components/icons/dialog/DownArrowIcon.vue";
import { computed, onBeforeMount, ref } from "vue";
import { useMoviesStore } from "@/stores/useMoviesStore";
import i18n from "@/i18n";
import { Field } from "vee-validate";

const props = defineProps({
  onlyOne: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const moviesStore = useMoviesStore();

const open = ref(false);
const selected = ref("");

const movies = computed(() => moviesStore.movies);
const movie = computed(() => moviesStore.movie);
const lang = computed(() => i18n.global.locale);
const SelectedId = ref(props.onlyOne ? "haveValue" : null);

onBeforeMount(() => {
  if (!props.onlyOne) {
    moviesStore.getMovies();
  }
});

const setValue = (e) => {
  selected.value = e.target.textContent;
  SelectedId.value = e.target.id;
  open.value = false;
};
</script>

<template>
  <div
    class="fixed top-0 left-0 z-40 h-screen w-screen"
    v-if="open"
    @click="open = false"
  ></div>
  <div class="relative z-[42]">
    <Field
      v-slot="{ field, meta }"
      name="movie"
      v-model="SelectedId"
      rules="required"
    >
      <input type="number" v-bind="field" class="hidden" />

      <section
        @click="onlyOne ? (open = false) : (open = !open)"
        class="flex flex-row items-center justify-between rounded-lg bg-[#000000] px-3 py-4"
        :class="[
          !meta.valid && meta.touched
            ? 'outline outline-1 outline-[#DC3545]'
            : '',
          meta.valid && meta.touched
            ? 'outline outline-1 outline-[#198754]'
            : '',
        ]"
      >
        <div class="flex flex-row gap-3">
          <movie-icon />
          <p>
            {{
              onlyOne
                ? movie?.title[lang]
                : selected === ""
                ? $t("movies.choose_movie")
                : selected
            }}
          </p>
        </div>
        <down-arrow
          :class="open ? 'rotate-180' : 'rotate-0'"
          class="transition-all ease-linear"
        />
      </section>
    </Field>

    <ul
      class="z-[42] mt-1 flex max-h-[8.5rem] w-full flex-col overflow-y-auto rounded-lg bg-black py-1"
      v-if="open"
    >
      <li
        class="py-1 px-3 hover:bg-slate-900"
        @click="setValue"
        v-for="item in movies"
        :key="item.id"
        :id="item.id"
      >
        {{ item.title[lang] }}
      </li>
    </ul>
  </div>
</template>
