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
    class="w-full md:w-[78%] px-[7%] md:px-8 pt-6 pb-5 rounded-[0.6rem] bg-[#11101A]"
  >
    <section class="relative flex flex-col gap-5">
      <div class="flex flex-col lg:flex-row gap-6 items-center">
        <img
          class="w-full lg:w-[14.1rem] h-[12.4rem] md:h-[8.7rem] object-cover object-center object-center rounded-sm"
          :src="url + quote?.thumbnail"
          alt="quote"
        />
        <h1
          class="text-[#CED4DA] italic font-normal break-words break-all text-2xl"
        >
          "{{ quote?.title[lang] }}"
        </h1>
      </div>
      <div class="flex flex-row gap-6 border-t border-[#efefef4d] pt-4">
        <div class="flex flex-row gap-2 items-center leading-none">
          <span class="md:text-xl">3</span>
          <comment-icon class="w-[60%] h-[60%]" />
        </div>
        <div class="flex flex-row gap-2 items-center">
          <span class="md:text-xl">10</span>
          <like-icon class="w-[60%] h-[60%]" />
        </div>
      </div>
      <quotes-dropdown :id="quote.id" />
    </section>
  </div>
</template>
