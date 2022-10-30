<script setup>
import { inject, ref } from "vue";

const show = ref(inject("show"));
const close = (e) => {
  if (document.getElementById("container") === e.target) {
    show.value = false;
  }
};
</script>

<template>
  <div>
    <div
      @click="close"
      id="container"
      class="h-screen w-screen fixed top-0 left-0 z-30 overflow-hidden backdrop-blur-sm bg-[#00000089] flex justify-center items-center"
      :class="[show ? '' : 'hidden']"
    >
      <div
        class="bg-[#222030] w-screen h-screen md:w-[30%] md:h-[64%] md:top-[-1rem] md:rounded-xl z-40"
      ></div>
    </div>
  </div>
</template>
