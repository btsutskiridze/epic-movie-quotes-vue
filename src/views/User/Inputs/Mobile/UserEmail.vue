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
    <label for="email" class="top-[-1.3rem] text-base text-white capitalize"
      >email
    </label>
    <div class="w-full relative border-b border-[#40414A]">
      <input
        id="email"
        name="email"
        type="email"
        placeholder="email"
        disabled
        :value="email"
        class="w-full relative placeholder-[#6C757D] text-white bg-transparent px-3 py-2 my-2 rounded-[0.25rem] focus:outline-none"
      />
    </div>
  </section>
</template>
