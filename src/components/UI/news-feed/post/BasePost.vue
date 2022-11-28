<script setup>
// import BaseComment from "@/components/UI/news-feed/post/BaseComment.vue";
import CommentTextarea from "@/components/UI/news-feed/post/CommentTextarea.vue";
import LikesAndComments from "@/components/layout/news-feed/post/LikesAndComments.vue";
import i18n from "@/i18n";
import { computed } from "vue";
import { useQuoteStore } from "@/stores/useQuoteStore";
defineProps({
  quote: {
    type: Object,
    required: true,
  },
});
const quoteStore = useQuoteStore();
const url = quoteStore.url;
const lang = computed(() => i18n.global.locale);
</script>

<template>
  <div class="w-full bg-[#11101A] rounded-xl py-6 px-[7%] md:px-5">
    <div class="flex flex-col gap-4">
      <div id="user" class="flex flex-row items-center gap-4">
        <img
          src="@/assets/images/news-feed/avatar.png"
          alt="avatar"
          class="w-10 h-10"
        />
        <h1>{{ quote.user.name }}</h1>
      </div>
      <div class="flex flex-row gap-3">
        <p class="break-words break-all">"{{ quote.title[lang] }}”</p>
        <p>
          <span class="text-[#DDCCAA]">{{ quote.movie.title[lang] }}</span>
        </p>
      </div>
      <div>
        <img
          :src="url + quote.thumbnail"
          alt="post-image"
          class="w-full min-h-[30vh] object-cover object-center rounded-[0.6rem]"
        />
      </div>
      <likes-and-comments></likes-and-comments>
      <div id="comments" class="flex flex-col gap-6">
        <!-- <base-comment
          v-for="comment in quote.comments"
          :key="comment.id"
          :username="comment.username"
          >{{ comment.text }}</base-comment
        > -->

        <comment-textarea></comment-textarea>
      </div>
    </div>
  </div>
</template>
