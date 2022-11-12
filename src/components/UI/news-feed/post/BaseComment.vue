<script setup>
defineProps({
  username: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-row gap-3">
    <img
      src="@/assets/images/news-feed/avatar.png"
      alt="avatar"
      class="w-10 h-10"
    />
    <div class="border-b border-[#efefef4d] pb-2 w-full">
      <h1>{{ username }}</h1>
      <p class="text-gray-400">
        <slot></slot>
      </p>
    </div>
  </div>
</template>
