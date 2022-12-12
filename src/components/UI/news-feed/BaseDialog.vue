<script setup>
import CloseIcon from "@/components/icons/dialog/CloseIcon.vue";

defineProps({
  top: {
    type: String,
    required: false,
    default: "top-0 md:top-[5%]",
  },
});
const emits = defineEmits(["close"]);

const closeDialog = (e) => {
  if ("container" === e.target.id) {
    emits("close");
    return;
  }

  if (e.target.classList.contains("closebtn")) {
    emits("close");
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
        class="fixed top-0 left-0 z-30 flex h-screen w-screen items-center justify-center overflow-x-hidden overflow-y-scroll bg-[#00000089] backdrop-blur-sm"
      >
        <dialog
          open
          class="z-[31] mb-10 w-full overflow-x-hidden bg-[#11101A] p-0 md:h-min md:min-h-[auto] md:min-w-[37.5rem] md:max-w-[32%] md:rounded-xl"
          :class="top"
        >
          <div
            class="relative border-b border-[#efefef4d] px-9 py-6 text-center md:px-[1.2rem]"
          >
            <h1 class="text-xl text-white md:text-2xl">
              <slot name="header"></slot>
            </h1>
            <div
              @click="closeDialog"
              class="closebtn absolute top-0 right-8 z-40 flex h-full cursor-pointer items-center text-right"
            >
              <close-icon />
            </div>
          </div>
          <div class="px-9 py-8 md:px-[1.6rem] md:pt-2">
            <slot></slot>
          </div>
        </dialog>
      </div>
    </teleport>
  </div>
</template>
