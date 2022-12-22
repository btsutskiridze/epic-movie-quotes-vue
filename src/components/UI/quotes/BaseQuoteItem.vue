<script setup>
import CommentIcon from "@/components/icons/news-feed/CommentIcon.vue";
import LikeIcon from "@/components/icons/news-feed/LikeIcon.vue";
import QuotesDropdown from "@/components/layout/quotes/QuotesDropdown.vue";
import { computed } from "vue";
import i18n from "@/i18n";
import { useMoviesStore } from "@/stores/useMoviesStore";

defineProps({
  quote: {
    type: Object,
    required: true,
  },
});
const url = useMoviesStore().url;
const lang = computed(() => i18n.global.locale);
</script>

<template>
  <div
    class="w-full rounded-[0.6rem] bg-[#11101A] px-[7%] pt-6 pb-5 md:w-[78%] md:px-8"
  >
    <section class="relative flex flex-col gap-5">
      <div class="flex flex-col items-center gap-6 lg:flex-row">
        <img
          class="h-[12.4rem] w-full rounded-sm object-cover object-center md:h-[8.7rem] lg:w-[14.1rem]"
          :src="url + quote?.thumbnail"
          alt="quote"
        />
        <h1
          class="break-words break-all text-2xl font-normal italic text-[#CED4DA]"
        >
          "{{ quote?.title[lang] }}"
        </h1>
      </div>
      <div class="flex flex-row gap-6 border-t border-[#efefef4d] pt-4">
        <div class="flex flex-row items-center gap-2 leading-none">
          <span class="md:text-xl">{{ quote.comments.length }}</span>
          <comment-icon class="h-[60%] w-[60%]" />
        </div>
        <div class="flex flex-row items-center gap-2">
          <span class="md:text-xl">{{ quote?.likes.length }}</span>
          <like-icon class="h-[67%] w-[67%]" />
        </div>
      </div>
      <quotes-dropdown :id="quote.id" />
    </section>
  </div>
</template>
