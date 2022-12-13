<script setup>
import { onMounted, onUnmounted, computed, ref } from "vue";

const emit = defineEmits(["close"]);
const clientHeight = computed(() => document.documentElement.clientHeight);
const dialogHeight = ref(undefined);

onMounted(() => {
  dialogHeight.value = document.getElementById("dialog").offsetHeight;
  document.body.style.position = "fixed";
  document.body.style.width = "100vw";
});

onUnmounted(() => {
  document.body.style.position = "unset";
  document.body.style.width = "auto";
});

const closeDialog = (e) => {
  if (document.getElementById("container") === e.target) {
    emit("close");
  }
};
</script>

<template>
  <div>
    <teleport to="body">
      <div
        @click="closeDialog"
        id="container"
        class="fixed top-0 left-0 z-30 flex h-screen w-screen items-center justify-center overflow-y-scroll bg-[#00000089] backdrop-blur-sm"
      >
        <dialog
          open
          id="dialog"
          :class="dialogHeight > clientHeight ? 'top-0' : ''"
          class="z-40 h-screen w-full overflow-x-hidden bg-[#222030] px-9 pt-10 sm:h-min sm:min-w-[37.5rem] sm:max-w-[32%] sm:rounded-xl sm:px-[7rem] md:pt-2"
        >
          <slot></slot>
        </dialog>
      </div>
    </teleport>
  </div>
</template>
