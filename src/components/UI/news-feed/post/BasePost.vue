<script setup>
import BaseComment from "@/components/UI/news-feed/post/BaseComment.vue";
import CommentTextarea from "@/components/UI/news-feed/post/CommentTextarea.vue";
import LikesAndComments from "@/components/layout/news-feed/post/LikesAndComments.vue";

defineProps({
  quote: {
    type: Object,
    required: true,
  },
});
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
        <h1>{{ quote.username }}</h1>
      </div>
      <div class="flex flex-row gap-3">
        <p>"{{ quote.text }}”</p>
        <p>
          <span class="text-[#DDCCAA]">{{ quote.moviename }}</span>
        </p>
      </div>
      <div>
        <img
          src="@/assets/images/news-feed/post-image.png"
          alt="post-image"
          class="w-full"
        />
      </div>
      <likes-and-comments></likes-and-comments>
      <div id="comments" class="flex flex-col gap-6">
        <base-comment
          v-for="comment in quote.comments"
          :key="comment.id"
          :username="comment.username"
          >{{ comment.text }}</base-comment
        >

        <comment-textarea></comment-textarea>
      </div>
    </div>
  </div>
</template>