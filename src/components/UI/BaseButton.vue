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
    class="px-4 py-2 rounded-md leading-normal font-normal z-30"
    :class="[
      orange ? 'bg-[#E31221]' : '',
      outline ? 'outline-1 outline-white outline -outline-offset-1' : '',
    ]"
  >
    <slot />
  </button>
</template>
