<script setup>
import CameraIcon from "@/components/icons/dialog/CameraIcon.vue";
import { ref } from "vue";

const img = ref(null);

const getImage = () => {
  document.getElementById("image-input").click();
};
const setImage = (e) => {
  img.value = e.target.files.length !== 0 ? e.target.files[0].name : img.value;
};

const dragFile = (e) => {
  document.getElementById("image-input").files = e.dataTransfer.files;
  img.value = e.dataTransfer.files[0].name;
};
</script>

<template>
  <div
    @drop.prevent="dragFile"
    @dragover.prevent
    class="relative flex flex-row gap-3 p-3 items-center justify-between border rounded-[4px] border-[#6C757D]"
  >
    <p class="flex flex-row gap-3">
      <camera-icon />
      {{ img !== null ? img : "Upload image" }}
    </p>
    <button class="bg-[#462676] rounded-[4px] p-[10px]" @click="getImage">
      Choose File
    </button>
    <input
      type="file"
      accept="image/jpeg, image/png"
      class="absolute w-full left-0 h-full hidden"
      @change="setImage"
      id="image-input"
    />
  </div>
</template>

<style></style>
