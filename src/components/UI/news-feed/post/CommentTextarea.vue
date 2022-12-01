<script setup>
import axios from "@/config/axios/index.js";
import { Field } from "vee-validate";
import { Form as VeeForm } from "vee-validate";
import { useCommentStore } from "@/stores/useCommentStore";
import { useQuoteStore } from "@/stores/useQuoteStore";
import { useUserStore } from "@/stores/useUserStore";
import { ref } from "vue";

const commentStore = useCommentStore();
const body = ref("");
const autoResize = (e) => {
  e.target.style.height = "auto";
  e.target.style.height = e.target.scrollHeight + "px";
};

const props = defineProps({
  showUser: {
    type: Boolean,
    required: false,
    default: true,
  },
  quoteId: {
    type: Number,
    required: true,
  },
  quoteUserId: {
    type: Number,
    required: true,
  },
});
const addComment = (values) => {
  const name = useUserStore().user.name;
  const comment = values.comment;
  const quoteId = props.quoteId;

  //adding static comment
  commentStore.add(quoteId, name, comment);
  body.value = "";

  //adding to database
  axios
    .post("quotes/" + props.quoteId + "/comment", {
      quoteId: quoteId,
      author: name,
      from_id: useUserStore().user.id,
      to_id: props.quoteUserId,
      body: comment,
    })
    .then(() => {});
};

window.Echo.channel("add-comment-channel").listen(".new-comment", (e) => {
  if (
    e.comment.author !== useUserStore().user.name &&
    e.comment.quoteId === props.quoteId
  ) {
    useCommentStore().comments = [];
    useQuoteStore().refreshQuotes();
  }
});
</script>

<template>
  <VeeForm v-slot="{ handleSubmit }">
    <div class="flex flex-row gap-3 items-start">
      <img
        v-if="showUser"
        src="@/assets/images/news-feed/avatar.png"
        alt="avatar"
        class="w-10 h-10"
      />
      <Field v-slot="{ field }" name="comment" rules="required" v-model="body">
        <div class="w-full">
          <textarea
            v-bind="field"
            rows="1"
            cols="50"
            id="comment"
            autocomplete="off"
            @keypress.enter.prevent="handleSubmit($event, addComment)"
            @input="autoResize"
            class="bg-[#24222F] overflow-y-hidden resize-none px-4 py-3 leading-5 rounded-xl text-base focus:outline-none hover:outline-none placeholder-white w-full"
            :placeholder="$t('newsFeed.write_a_comment')"
          ></textarea>
        </div>
      </Field>
    </div>
  </VeeForm>
</template>
