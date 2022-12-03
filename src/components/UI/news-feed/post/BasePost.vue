<script setup>
import BaseComment from "@/components/UI/news-feed/post/BaseComment.vue";
import CommentTextarea from "@/components/UI/news-feed/post/CommentTextarea.vue";
import LikesAndComments from "@/components/layout/news-feed/post/PostLikesAndComments.vue";
import i18n from "@/i18n";
import { computed } from "vue";
import { useQuoteStore } from "@/stores/useQuoteStore";
import { useUserStore } from "@/stores/useUserStore";
import { useCommentStore } from "@/stores/useCommentStore";
const props = defineProps({
  quote: {
    type: Object,
    required: true,
  },
});
const quoteStore = useQuoteStore();
const commentStore = useCommentStore();
const url = quoteStore.url;
const lang = computed(() => i18n.global.locale);
const staticComments = computed(() =>
  commentStore.comments.filter((com) => com.quote_id === props.quote.id)
);
</script>

<template>
  <div class="w-full rounded-xl bg-[#11101A] py-6 px-[7%] md:px-5">
    <div class="flex flex-col gap-4">
      <div id="user" class="flex flex-row items-center gap-4">
        <img
          :src="quote.user?.avatar"
          alt="avatar"
          class="h-10 w-10 rounded-full object-cover"
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
          class="min-h-[30vh] w-full rounded-[0.6rem] object-cover object-center"
        />
      </div>
      <likes-and-comments
        :quoteId="quote.id"
        :quoteUserId="quote.user.id"
        :likes="quote.likes_count"
        :comments="quote.comments.length + staticComments.length"
      ></likes-and-comments>
      <div id="comments" class="flex flex-col gap-6">
        <div class="flex max-h-[20rem] flex-col gap-6 overflow-auto">
          <base-comment
            v-for="comment in quote.comments"
            :key="comment.id"
            :username="comment.author?.name"
            :user-image="comment.author?.avatar"
            >{{ comment.body }}</base-comment
          >
          <base-comment
            v-for="comment in staticComments"
            :key="comment.id"
            :username="comment.author"
            :userImage="useUserStore().user?.avatar"
            >{{ comment.body }}</base-comment
          >
        </div>
        <comment-textarea
          :quoteId="quote.id"
          :quoteUserId="quote.user.id"
        ></comment-textarea>
      </div>
    </div>
  </div>
</template>
