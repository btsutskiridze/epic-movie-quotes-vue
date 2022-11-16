<script setup>
import EditIcon from "@/components/icons/news-feed/EditIcon.vue";
</script>

<template>
  <button
    @click="$router.push({ name: 'add-quote' })"
    class="bg-[#181624] py-6 px-[7%] w-full left-0 flex flex-row whitespace-nowrap"
  >
    <edit-icon class="mr-3" />
    {{ $t("newsFeed.write_new_quote") }}
  </button>
</template>
