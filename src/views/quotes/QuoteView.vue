<script setup>
import BaseComment from "@/components/UI/news-feed/post/BaseComment.vue";
import LikesAndComments from "@/components/layout/news-feed/post/LikesAndComments.vue";
import EditIcon from "@/components/icons/movies/EditIcon.vue";
import DeleteIcon from "@/components/icons/movies/DeleteIcon.vue";
import BaseTextarea from "@/components/UI/form/BaseTextarea.vue";

import { computed, onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";
import router from "@/router";
import { useQuoteStore } from "@/stores/useQuoteStore";

const quoteStore = useQuoteStore();
const url = quoteStore.url;

const quote = computed(() => quoteStore.quote);
const movieId = ref(useRoute().params.movieId);

onBeforeMount(() => {
  if (useRoute().query.quoteId)
    quoteStore.getQuote(useRoute().query.quoteId, "/with-relations");
  else goBack();
});

const goBack = () => {
  router.replace({ name: "movie", params: { movieId: movieId.value } });
};
</script>

<template>
  <news-feed-dialog @close="goBack">
    <template #header>
      <div class="absolute flex flex-row rounded-lg py-2 text-[#CED4DA]">
        <div
          class="cursor-pointer border-r border-white px-4"
          @click="
            $router.replace({
              name: 'edit-quote',
              params: {
                quoteId: quote.id,
              },
            })
          "
        >
          <edit-icon class="w-4 h-4" />
        </div>
        <div
          class="cursor-pointer px-4"
          @click="
            $router.replace({
              name: 'delete-quote',
              params: {
                quoteId: quote.id,
              },
            })
          "
        >
          <delete-icon class="w-4 h-4" />
        </div>
      </div>
      <div class="text-center">View Quote</div>
    </template>
    <loading-circle v-if="quoteStore.loading" />
    <div
      v-if="!quoteStore.loading && quoteStore.isFetched"
      class="w-full bg-[#11101A] text-white rounded-xl"
    >
      <div class="flex flex-col gap-4">
        <div id="user" class="flex flex-row items-center gap-4">
          <img
            src="@/assets/images/news-feed/avatar.png"
            alt="avatar"
            class="w-10 h-10"
          />
          <h1>{{ quote.user?.name }}</h1>
        </div>
        <div class="flex flex-col gap-1">
          <base-textarea
            rules="required|eng-textarea"
            name="title_en"
            placeholder="Start create new Quote"
            lang="Eng"
            :model="quote.title?.en"
            :disabled="true"
          />
          <base-textarea
            rules="required|geo-textarea"
            name="title_ka"
            placeholder="დაიწყე ახალი ციტატის დამატება"
            lang="ქარ"
            :model="quote.title?.ka"
            :disabled="true"
          />
        </div>
        <div>
          <img
            :src="url + quote.thumbnail"
            alt="post-image"
            class="w-full min-h-[30vh] object-cover rounded-[0.6rem]"
          />
        </div>
        <likes-and-comments></likes-and-comments>
        <div
          id="comments"
          class="flex flex-col gap-6 overflow-y-auto max-h-[14rem]"
        >
          <base-comment username="giorga">woow amaizing</base-comment>
          <base-comment username="giorga">woow amaizing</base-comment>
          <base-comment username="giorga">woow amaizing</base-comment>
          <base-comment username="giorga">woow amaizing</base-comment>
          <base-comment username="giorga">woow amaizing</base-comment>
          <base-comment username="giorga">woow amaizing</base-comment>
        </div>
      </div>
    </div>
  </news-feed-dialog>
</template>
