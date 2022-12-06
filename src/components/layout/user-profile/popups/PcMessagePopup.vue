<script setup>
import SuccessIcon from "@/components/icons/profile/SuccessIcon.vue";
import CloseIcon from "@/components/icons/profile/CloseIcon.vue";
import { useProfileStore } from "@/stores/useProfileStore";

const profileStore = useProfileStore();
</script>

<template>
  <div
    v-if="profileStore.newEmailAdded"
    class="fixed right-[4rem] top-[7rem] flex min-h-[7.6rem] min-w-[25rem] flex-col gap-8 rounded-[0.25rem] bg-[#D1E7DD] p-4 font-normal"
  >
    <div class="flex flex-row justify-between">
      <section class="flex flex-row gap-4 text-[#0F5132]">
        <success-icon class="h-6 w-6" />
        <span>New email Added succsessfully</span>
      </section>
      <close-icon
        @click="profileStore.newEmailAdded = false"
        class="cursor-pointer"
      />
    </div>
    <h1 class="text-center text-black">
      Please check email to verify new address
    </h1>
  </div>
</template>
