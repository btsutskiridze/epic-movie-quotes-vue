<script setup>
import DropdownArrowIcon from "@/components/icons/DropdownArrowIcon.vue";
import { ref } from "vue";
let show = ref(false);

const toggleMenu = () => {
  show.value = !show.value;
};
</script>

<template>
  <ul id="dropdown" class="relative text-center hidden md:block z-30">
    <li
      class="gap-3 cursor-pointer relative flex flex-row justify-between mr-2 items-center mb-1"
      @click="toggleMenu"
    >
      Eng
      <DropdownArrowIcon />
    </li>
    <li
      v-if="show"
      @click="toggleMenu"
      class="px-2 py-1 -left-2 gap-3 absolute cursor-pointer flex flex-row justify-between mr-2 items-center bg-[#2a263d] rounded-xl hover:bg-[#322b57] active:bg-[#473f6e]"
    >
      Geo
      <DropdownArrowIcon class="invisible" />
    </li>
  </ul>
</template>
