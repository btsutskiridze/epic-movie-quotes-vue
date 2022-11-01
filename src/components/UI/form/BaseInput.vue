<script setup>
import { Field } from "vee-validate";
import OpenedEye from "@/components/icons/OpenedEyeIcon.vue";
import ClosedEye from "@/components/icons/ClosedEyeIcon.vue";
import { ref } from "vue";
defineProps({
  name: {
    type: String,
    required: true,
  },
  labelName: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    reuqired: false,
    default: "text",
  },
  rules: {
    type: String,
    required: false,
  },
  placeholder: {
    type: String,
    required: false,
  },
});

const show = ref(false);
const passwordType = ref("password");

const eye = (option) => {
  switch (option) {
    case "open":
      passwordType.value = "text";
      show.value = true;
      break;
    case "close":
      passwordType.value = "password";
      show.value = false;
  }
};
</script>

<template>
  <div class="my-4 relative">
    <label for="name" class="text-white relative capitalize"
      >{{ $t(labelName) }} <span class="text-[#DC3545]">*</span></label
    >
    <Field
      :id="name"
      :name="name"
      :type="type === 'password' ? passwordType : type"
      :placeholder="$t(placeholder)"
      :rules="rules"
      class="w-full placeholder-[#6C757D] text-[#212529] bg-[#CED4DA] px-3 py-2 my-2 rounded-[4px] disabled:bg-white disabled:placeholder-[#B7BBC0] outline-none focus:outline-2 focus:outline-offset-0 focus:outline-[#A9B5BF]"
    />
    <p
      v-if="type === 'password'"
      class="absolute top-10 right-2 cursor-pointer"
    >
      <closed-eye v-if="!show" @click="eye('open')" />
      <opened-eye v-if="show" @click="eye('close')" />
    </p>
  </div>
</template>

<style></style>
