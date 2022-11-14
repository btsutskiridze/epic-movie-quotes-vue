<script setup>
import MovieIcon from "@/components/icons/dialog/MovieIcon.vue";
// import DownArrow from "@/components/icons/dialog/DownArrow.vue";
import { ref } from "vue";
const width = ref(document.getElementById("container"));
console.log(width.value);
</script>

<template>
  <div class="relative" id="container">
    <!-- <section
      class="bg-[#000000] px-3 py-4 flex flex-row justify-between items-center rounded-lg"
    >
      <div class="flex flex-row gap-3">
        <movie-icon />
        <p>Choose movie</p>
      </div>
      <down-arrow />
    </section>
    <ul
      class="fixed w-[33rem] flex flex-col bg-black mt-1 py-1 z-[42] rounded-lg"
    >
      <li class="py-1 px-3 hover:bg-slate-900">movie 1</li>
      <li class="py-1 px-3 hover:bg-slate-900">movie 2</li>
      <li class="py-1 px-3 hover:bg-slate-900">movie 3</li>
      <li class="py-1 px-3 hover:bg-slate-900">movie 4</li>
    </ul> -->

    <movie-icon class="absolute top-5 left-3" />

    <select
      name="movie"
      id="movie"
      class="w-full p-6 pl-12 bg-black text-white focus:outline-none rounded-lg hover:outline-none"
    >
      <option value="Choose-movie" disabled selected>Choose-movie</option>
      <option value="movie1" class="leading-10">movie 1</option>
      <option value="movie2" class="leading-10">movie 2</option>
      <option value="movie3" class="leading-10">movie 3</option>
      <option value="movie4" class="leading-10">movie 4</option>
    </select>
  </div>
</template>
