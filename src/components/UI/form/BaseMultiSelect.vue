<script setup>
import RemoveIcon from "@/components/icons/dialog/RemoveIcon.vue";

import { Field } from "vee-validate";
import { ref } from "vue";
const chips = ref([]);
const open = ref(false);
const genres = ref();

defineProps({
  name: {
    type: String,
    required: true,
  },
});

const saveChip = (e) => {
  if (!chips.value.includes(e.target.textContent)) {
    e.target.classList.add("bg-gray-800");
    chips.value.push(e.target.textContent);
    genres.value = chips.value;
  }
};
const removeChip = (index) => {
  document
    .getElementById(chips.value[index].trim())
    .classList.remove("bg-gray-800");
  // .classList.remove("bg-gray-800");
  chips.value.splice(index, 1);
};

const toggleGenres = (e) => {
  if (!e.target.classList.contains("chip-remove")) {
    open.value = !open.value;
  }
};

const rule = () => {
  if (chips.value.length === 0) {
    return false;
  } else {
    return true;
  }
};
</script>

<template>
  <div
    class="fixed w-screen h-screen top-0 left-0 z-20"
    v-if="open"
    @click="open = false"
  ></div>
  <div class="z-[50]">
    <Field v-slot="{ field, meta }" :name="name" :rules="rule" v-model="genres">
      <div
        @click="toggleGenres"
        class="flex flex-wrap gap-y-2 cursor-pointer content-between border rounded-[0.25rem] border-[#6C757D] pr-12 py-2 text-base w-full"
        :class="[
          !meta.valid && meta.touched ? 'border-[#DC3545]' : '',
          meta.valid ? 'border-[#198754]' : '',
        ]"
      >
        <div
          class="bg-gray-600 flex items-center ml-2 pl-2 rounded-sm w-max"
          v-for="(chip, i) of chips"
          :key="chip.label"
        >
          <span class="cursor-default"> {{ chip }} </span>
          <span @click="removeChip(i)" class="cursor-pointer p-2 chip-remove">
            <remove-icon />
          </span>
          <!-- <p class="flex flex-row items-center gap-2 cursor-default">

          </p> -->
        </div>
        <input
          v-bind="field"
          :id="name"
          class="cursor-pointer w-16 bg-transparent px-2 placeholder-[#6C757D]"
          :class="chips.length !== 0 ? 'invisible ' : ''"
          :placeholder="chips.length === 0 ? 'Genre' : ''"
          autocomplete="off"
          disabled
        />
      </div>
    </Field>
    <ul
      class="w-full flex flex-col max-h-[8.5rem] overflow-y-auto bg-black mt-2 py-1 rounded-lg"
      v-show="open"
    >
      <li
        id="movie-1"
        class="cursor-pointer py-1 px-3 hover:bg-slate-900"
        @click="saveChip"
      >
        movie-1
      </li>
      <li
        id="movie-2"
        class="cursor-pointer py-1 px-3 hover:bg-slate-900"
        @click="saveChip"
      >
        movie-2
      </li>
      <li
        id="movie-3"
        class="cursor-pointer py-1 px-3 hover:bg-slate-900"
        @click="saveChip"
      >
        movie-3
      </li>
    </ul>
  </div>
</template>
