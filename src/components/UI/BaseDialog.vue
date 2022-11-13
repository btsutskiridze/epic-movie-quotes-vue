<script setup>
const emit = defineEmits(["close"]);

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
        class="h-screen w-screen fixed top-0 left-0 z-30 backdrop-blur-sm bg-[#00000089] flex justify-center items-center"
      >
        <dialog
          open
          class="bg-[#222030] w-full h-screen sm:min-w-[600px] overflow-x-hidden sm:max-w-[32%] sm:h-min sm:rounded-xl z-40 px-9 pt-10 md:pt-2 sm:px-[7rem]"
        >
          <slot></slot>
        </dialog>
      </div>
    </teleport>
  </div>
</template>
