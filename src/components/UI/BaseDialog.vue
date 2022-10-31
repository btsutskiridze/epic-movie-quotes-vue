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
        class="h-screen w-screen fixed top-0 left-0 z-30 overflow-hidden backdrop-blur-sm bg-[#00000089] flex justify-center items-center"
      >
        <dialog
          open
          class="bg-[#222030] w-screen h-screen md:max-w-[34%] md:h-[64%] md:rounded-xl z-40"
        >
          <slot></slot>
        </dialog>
      </div>
    </teleport>
  </div>
</template>
