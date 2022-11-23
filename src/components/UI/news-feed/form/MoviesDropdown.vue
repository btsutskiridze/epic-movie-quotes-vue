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
const selected = ref("Choose movie");

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
    class="fixed w-screen h-screen top-0 left-0 z-40"
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
        class="bg-[#000000] px-3 py-4 flex flex-row justify-between items-center rounded-lg"
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
          <p>{{ onlyOne ? movie?.title[lang] : selected }}</p>
        </div>
        <down-arrow
          :class="open ? 'rotate-180' : 'rotate-0'"
          class="transition-all ease-linear"
        />
      </section>
    </Field>

    <ul
      class="w-full flex flex-col max-h-[8.5rem] overflow-y-auto bg-black mt-1 py-1 z-[42] rounded-lg"
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
