<script setup>
defineProps({
  email: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <section class="relative flex flex-col justify-center gap-1">
    <label for="email" class="top-[-1.3rem] text-base capitalize text-white">
      {{ $t("profile.email") }}
    </label>
    <div class="relative w-full border-b border-[#40414A]">
      <input
        id="email"
        name="email"
        type="email"
        :placeholder="$t('profile.email')"
        disabled
        :value="email"
        class="relative my-2 w-full rounded-[0.25rem] bg-transparent px-3 py-2 text-white placeholder-[#6C757D] focus:outline-none"
      />
    </div>
  </section>
</template>
