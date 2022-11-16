<script setup>
import { ref } from "vue";
const chips = ref([]);
const currentInput = ref("");

const saveChip = () => {
  if (currentInput.value.trim().length !== 0) {
    chips.value.push(currentInput.value);
  }
  currentInput.value = "";
};

const backspaceDelete = ({ which }) => {
  which == 8 &&
    currentInput.value === "" &&
    chips.value.splice(chips.value.length - 1);
};
</script>

<template>
  <div
    class="flex flex-wrap gap-y-2 content-between border rounded-[0.25rem] border-[#6C757D] pr-12 py-2 text-base w-full"
  >
    <div
      class="bg-gray-600 flex items-center ml-2 px-2 rounded-sm w-max"
      v-for="chip of chips"
      :key="chip.label"
    >
      <p>
        {{ chip }}
      </p>
    </div>
    <input
      id="input"
      class="flex flex-auto w-8 bg-transparent px-2 focus:outline-none hover:outline-none placeholder-[#6C757D]"
      v-model="currentInput"
      :placeholder="chips.length === 0 ? 'Genre' : ''"
      @keypress.enter="saveChip"
      @keydown.delete="backspaceDelete"
    />
  </div>
</template>
