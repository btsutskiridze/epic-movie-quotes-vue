<script setup>
import SuccessIcon from "@/components/icons/profile/SuccessIcon.vue";

defineProps({
  email: {
    type: String,
    required: true,
  },
  googleId: {
    type: String,
    required: false,
  },

  id: {
    type: Number,
    required: true,
  },
});
</script>
<template>
  <section class="relative flex flex-col justify-center gap-1">
    <label for="email" class="top-[-1.3rem] text-sm capitalize text-white">
      {{ $t("profile.primary_email") }}
    </label>
    <div class="relative w-full border-b border-[#40414A] pb-4">
      <div class="flex flex-row gap-4">
        <input
          :id="id"
          type="email"
          :placeholder="$t('profile.email')"
          disabled
          :value="email"
          class="relative my-2 w-full rounded-[0.25rem] border border-[#198754] bg-[#223637] px-3 py-2 text-white placeholder-[#6C757D] outline-none focus:outline-2 focus:outline-offset-0 focus:outline-[#A9B5BF]"
        />
        <div class="absolute top-[1.4rem] right-6">
          <success-icon />
        </div>
      </div>
    </div>
  </section>
</template>
