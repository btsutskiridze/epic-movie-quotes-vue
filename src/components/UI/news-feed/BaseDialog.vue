<script setup>
import CloseIcon from "@/components/icons/dialog/CloseIcon.vue";

const emit = defineEmits(["close"]);

const closeDialog = (e) => {
  if (document.getElementById("container") === e.target) {
    emit("close");
    return;
  }

  if (e.target.classList.contains("closebtn")) {
    emit("close");
    return;
  }
};
</script>

<template>
  <div>
    <teleport to="body">
      <div
        @click="closeDialog"
        id="container"
        class="h-screen overflow-y-scroll overflow-x-hidden w-screen fixed top-0 left-0 z-30 backdrop-blur-sm bg-[#00000089] flex justify-center items-center"
      >
        <dialog
          open
          class="bg-[#11101A] w-full md:min-h-[auto] top-0 md:top-[5%] md:min-w-[37.5rem] overflow-x-hidden md:max-w-[32%] md:h-min md:rounded-xl z-30 p-0 mb-10"
        >
          <div
            class="text-center relative border-b px-9 md:px-[1.2rem] py-6 border-[#efefef4d]"
          >
            <h1 class="text-white text-xl md:text-2xl">
              <slot name="header"></slot>
            </h1>
            <div
              @click="closeDialog"
              class="closebtn absolute flex items-center h-full top-0 right-8 text-right cursor-pointer z-40"
            >
              <close-icon />
            </div>
          </div>
          <div class="px-9 py-8 md:pt-2 md:px-[1.6rem]">
            <slot></slot>
          </div>
        </dialog>
      </div>
    </teleport>
  </div>
</template>
