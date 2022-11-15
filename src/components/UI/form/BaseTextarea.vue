<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: false,
  },
  lang: {
    type: String,
    required: false,
  },
});

const autoResize = (e) => {
  e.target.style.height = "auto";
  e.target.style.height = e.target.scrollHeight + "px";
};
</script>

<template>
  <div class="relative">
    <label :for="name" class="absolute right-4 top-2">{{ lang }}</label>
    <textarea
      rows="1"
      cols="50"
      :name="name"
      :id="name"
      autocomplete="off"
      @input="autoResize"
      class="relative bg-transparent resize-none overflow-y-hidden border rounded-[4px] border-[#6C757D] pl-2 pr-12 py-2 text-base focus:outline-none hover:outline-none placeholder-[#6C757D] w-full"
      :placeholder="placeholder"
    />
  </div>
</template>
