<script setup>
defineProps({
  orange: {
    type: Boolean,
    required: false,
  },
  outline: {
    type: Boolean,
    required: false,
  },
});
</script>

<template>
  <button
    class="z-20 rounded-md px-4 py-2 font-normal leading-normal outline-none"
    :class="[
      orange ? 'bg-[#E31221] hover:bg-[#CC0E10] active:bg-[#B80D0F]' : '',
      outline ? 'outline outline-1 -outline-offset-1 outline-white' : '',
    ]"
  >
    <slot />
  </button>
</template>
