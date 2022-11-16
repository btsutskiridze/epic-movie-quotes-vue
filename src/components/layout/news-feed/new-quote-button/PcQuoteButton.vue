<script setup>
import EditIcon from "@/components/icons/news-feed/EditIcon.vue";
</script>

<template>
  <button
    @click="$router.push({ name: 'add-quote' })"
    class="bg-[#1F1D2A] p-3 rounded-[0.6rem] flex flex-row justify-between whitespace-nowrap"
  >
    <edit-icon class="mr-3" />
    {{ $t("newsFeed.write_new_quote") }}
  </button>
</template>
