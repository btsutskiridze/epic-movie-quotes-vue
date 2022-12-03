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
    <label for="email" class="top-[-1.3rem] text-base text-white capitalize"
      >email
    </label>
    <div
      class="w-[67%] 2xl:w-[65%] relative"
      :class="[googleId ? '' : 'border-b border-[#40414A]']"
    >
      <input
        id="email"
        name="email"
        type="email"
        placeholder="email"
        disabled
        :value="email"
        class="w-full mb-20 relative placeholder-[#6C757D] text-[#212529] bg-[#CED4DA] px-3 py-2 my-2 rounded-[0.25rem] disabled:bg-white disabled:placeholder-[#B7BBC0] outline-none focus:outline-2 focus:outline-offset-0 focus:outline-[#A9B5BF]"
      />
      <span class="text-xl absolute top-4 -right-40 cursor-pointer"
        >Primary email</span
      >
    </div>
  </section>
</template>
