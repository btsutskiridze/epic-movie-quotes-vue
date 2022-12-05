<script setup>
defineProps({
  email: {
    type: String,
    required: true,
  },
  googleId: {
    type: String,
    required: false,
  },
});
</script>
<template>
  <section class="relative flex flex-col justify-center gap-1">
    <label for="email" class="top-[-1.3rem] text-base capitalize text-white">
      {{ $t("profile.email") }}
    </label>
    <div
      class="relative w-[67%] 2xl:w-[65%]"
      :class="[googleId ? '' : 'border-b border-[#40414A]']"
    >
      <div class="flex flex-row gap-4">
        <input
          id="email"
          name="email"
          type="email"
          :placeholder="$t('profile.email')"
          disabled
          :value="email"
          class="relative my-2 mb-20 w-full rounded-[0.25rem] bg-[#CED4DA] px-3 py-2 text-[#212529] placeholder-[#6C757D] outline-none focus:outline-2 focus:outline-offset-0 focus:outline-[#A9B5BF] disabled:bg-white disabled:placeholder-[#B7BBC0]"
        />
        <p class="relative">
          <span
            class="absolute top-4 left-0 cursor-pointer whitespace-nowrap text-xl"
          >
            {{ $t("profile.primary_email") }}
          </span>
        </p>
      </div>
    </div>
  </section>
</template>
