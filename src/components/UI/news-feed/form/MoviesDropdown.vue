<script setup>
import MovieIcon from "@/components/icons/dialog/MovieIcon.vue";
import DownArrow from "@/components/icons/dialog/DownArrowIcon.vue";
import { ref } from "vue";
const open = ref(false);
const selected = ref("Choose movie");
const setValue = (e) => {
  selected.value = e.target.textContent;
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
    <section
      @click="open = !open"
      class="bg-[#000000] px-3 py-4 flex flex-row justify-between items-center rounded-lg"
    >
      <div class="flex flex-row gap-3">
        <movie-icon />
        <p>{{ selected }}</p>
      </div>
      <down-arrow
        :class="open ? 'rotate-180' : 'rotate-0'"
        class="transition-all ease-linear"
      />
    </section>
    <ul
      class="w-full flex flex-col max-h-[8.5rem] overflow-y-auto bg-black mt-1 py-1 z-[42] rounded-lg"
      v-if="open"
    >
      <li class="py-1 px-3 hover:bg-slate-900" @click="setValue">movie 1</li>
      <li class="py-1 px-3 hover:bg-slate-900" @click="setValue">movie 2</li>
      <li class="py-1 px-3 hover:bg-slate-900" @click="setValue">movie 3</li>
      <li class="py-1 px-3 hover:bg-slate-900" @click="setValue">movie 3</li>
      <li class="py-1 px-3 hover:bg-slate-900" @click="setValue">movie 3</li>
      <li class="py-1 px-3 hover:bg-slate-900" @click="setValue">movie 3</li>
    </ul>
  </div>
</template>
