<script setup>
import CommentIcon from "@/components/icons/news-feed/CommentIcon.vue";
import LikeIcon from "@/components/icons/news-feed/LikeIcon.vue";
import likedIcon from "@/components/icons/quotes/LikedIcon.vue";
import { useUserStore } from "@/stores/useUserStore";
import axios from "@/config/axios/index.js";
import { onBeforeMount, ref } from "vue";

const props = defineProps({
  comments: {
    type: Number,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  quoteId: {
    type: Number,
    required: true,
  },
});
const likesNumber = ref(props.likes);
const likable = ref(true);
const userStore = useUserStore();

onBeforeMount(async () => {
  try {
    const response = await axios.post("quotes/" + props.quoteId + "/likable");
    likable.value = response.data.likable;
  } catch (error) {
    console.log(error);
  }
});

const toggleLike = async () => {
  //first toggle like
  if (likable.value) {
    likesNumber.value++;
    likable.value = false;
  } else {
    likesNumber.value--;
    likable.value = true;
  }

  //send response and see change for users also
  try {
    await axios.post("quotes/" + props.quoteId + "/like", {
      user_id: userStore.user.id,
      quote_id: props.quoteId,
      was_liked: !likable.value,
    });
  } catch (error) {
    console.log(error);
  }
};

window.Echo.channel("like-channel").listen(".toggle-like", (e) => {
  const isCorrectQuote =
    e.like.user_id !== userStore.user.id && e.like.quote_id === props.quoteId;

  if (isCorrectQuote) {
    if (e.like.was_liked) {
      likesNumber.value++;
      console.log("liked");
    } else {
      likesNumber.value--;
      console.log("unliked");
    }
  }
});
</script>

<template>
  <div class="flex flex-row gap-6 border-b border-[#efefef4d] pb-1">
    <div class="flex flex-row gap-2 items-center">
      <span class="md:text-xl">{{ comments }}</span>
      <comment-icon class="w-[60%] h-[60%]" />
    </div>
    <div
      class="flex flex-row gap-2 items-center cursor-pointer"
      @click="toggleLike()"
    >
      <span class="md:text-xl">{{ likesNumber }}</span>
      <like-icon class="w-[67%] h-[67%]" v-if="likable" />
      <liked-icon class="w-[67%] h-[67%]" v-else />
    </div>
  </div>
</template>
