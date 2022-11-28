<script setup>
import CommentIcon from "@/components/icons/news-feed/CommentIcon.vue";
import LikeIcon from "@/components/icons/news-feed/LikeIcon.vue";
import likedIcon from "@/components/icons/quotes/LikedIcon.vue";
// import { useUserStore } from "@/stores/useUserStore";
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
// const userStore = useUserStore();
const addLike = async () => {
  try {
    const response = await axios.post("quotes/" + props.quoteId + "/like");
    if (response.data === "like added") {
      likesNumber.value++;
      likable.value = false;
    } else {
      likesNumber.value--;
      likable.value = true;
    }
  } catch (error) {
    console.log(error);
  }
};
onBeforeMount(async () => {
  try {
    const response = await axios.post("quotes/" + props.quoteId + "/likable");
    console.log(response.data.likable);
    likable.value = response.data.likable;
  } catch (error) {
    console.log(error);
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
      @click="addLike()"
    >
      <span class="md:text-xl">{{ likesNumber }}</span>
      <like-icon class="w-[67%] h-[67%]" v-if="likable" />
      <liked-icon class="w-[67%] h-[67%]" v-else />
    </div>
  </div>
</template>
