<script setup>
import CommentIcon from "@/components/icons/news-feed/CommentIcon.vue";
import LikeIcon from "@/components/icons/news-feed/LikeIcon.vue";
import { useCommentStore } from "@/stores/useCommentStore";
defineProps({
  comments: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-row gap-6 border-b border-[#efefef4d] pb-1">
    <div class="flex flex-row gap-2 items-center">
      <span class="md:text-xl">{{
        comments + useCommentStore().comments.length
      }}</span>
      <comment-icon class="w-[60%] h-[60%]" />
    </div>
    <div class="flex flex-row gap-2 items-center">
      <span class="md:text-xl">10</span>
      <like-icon class="w-[60%] h-[60%]" />
    </div>
  </div>
</template>
