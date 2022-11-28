<script setup>
import axios from "@/config/axios/index.js";
import { Field } from "vee-validate";
import { Form as VeeForm } from "vee-validate";
import { useCommentStore } from "@/stores/useCommentStore";
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
});
const addComment = (values) => {
  console.log(values);
  axios
    .post("quotes/" + props.quoteId + "/comment", {
      body: values.comment,
    })
    .then(() => {
      commentStore.add(values.comment);
      body.value = "";
    });
};

// const clear = (e) => {
//   e.target.textContent = "";
// };
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
