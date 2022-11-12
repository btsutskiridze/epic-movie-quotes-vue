<script setup>
import BaseComment from "@/components/UI/news-feed/post/BaseComment.vue";
import BaseTextarea from "@/components/UI/news-feed/post/BaseTextarea.vue";
import LikesAndComments from "@/components/layout/news-feed/post/LikesAndComments.vue";
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
        <h1>Nino Chkheidze</h1>
      </div>
      <div class="">
        <span>“Follow your dream.”</span>
        <span>movie- Billy Elliot.</span>
        <span> (2000)</span>
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
        <base-comment username="Lela wurwumia"
          >ras gavxar she sacodao</base-comment
        >
        <base-comment username="Anri jokhadze"
          >lela reebs bedav she sacodao</base-comment
        >
        <base-comment username="Gia suramelashvili"
          >ver shemedrebitt
        </base-comment>
        <base-textarea></base-textarea>
      </div>
    </div>
  </div>
</template>
