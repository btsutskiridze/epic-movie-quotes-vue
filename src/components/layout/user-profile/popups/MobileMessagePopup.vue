<script setup>
import SuccessIcon from "@/components/icons/profile/SuccessIcon.vue";
import CloseIcon from "@/components/icons/profile/CloseIcon.vue";
import { useProfileStore } from "@/stores/useProfileStore";

const profileStore = useProfileStore();
</script>

<template>
  <div
    v-if="profileStore.newEmailAdded"
    class="fixed top-0 z-[42] flex h-screen w-screen justify-center bg-[#00000080]"
  >
    <div
      class="mt-[7rem] flex h-max w-[80%] flex-col gap-8 rounded-[0.25rem] bg-[#D1E7DD] p-4 font-normal md:fixed md:right-[4rem] md:translate-x-0"
    >
      <div class="flex flex-row justify-between">
        <section class="flex flex-row gap-4 text-[#0F5132]">
          <success-icon class="h-6 w-6" />
          <span>{{ $t("profile.new_email_added_successfully") }}</span>
        </section>
        <close-icon
          @click="profileStore.newEmailAdded = false"
          class="cursor-pointer"
        />
      </div>
      <h1 class="py-4 text-center text-black">
        {{ $t("profile.please_check_email_to_verify_new_address") }}
      </h1>
    </div>
  </div>
</template>
