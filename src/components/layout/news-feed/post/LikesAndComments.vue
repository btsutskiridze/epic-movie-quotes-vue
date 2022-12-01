<script setup>
import CommentIcon from "@/components/icons/news-feed/CommentIcon.vue";
import LikeIcon from "@/components/icons/news-feed/LikeIcon.vue";
import { ref } from "vue";

const props = defineProps({
  comments: {
    type: Number,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
});
const likesNumber = ref(props.likes);
</script>

<template>
  <div class="flex flex-row gap-6 border-b border-[#efefef4d] pb-1">
    <div class="flex flex-row gap-2 items-center">
      <span class="md:text-xl">{{ comments }}</span>
      <comment-icon class="w-[60%] h-[60%]" />
    </div>
    <div class="flex flex-row gap-2 items-center cursor-pointer">
      <span class="md:text-xl">{{ likesNumber }}</span>
      <like-icon class="w-[67%] h-[67%]" />
    </div>
  </div>
</template>
