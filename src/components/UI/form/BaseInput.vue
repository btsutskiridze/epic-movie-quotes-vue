<script setup>
import { Field, ErrorMessage } from "vee-validate";
import OpenedEye from "@/components/icons/OpenedEyeIcon.vue";
import ClosedEye from "@/components/icons/ClosedEyeIcon.vue";
import ErrorIcon from "@/components/icons/ErrorIcon.vue";
import SuccessIcon from "@/components/icons/SuccessIcon.vue";
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
  <div class="relative my-4 pb-1">
    <label for="name" class="relative capitalize text-white"
      >{{ $t(labelName) }} <span class="text-[#DC3545]">*</span></label
    >
    <Field :name="name" v-slot="{ field, meta }" :rules="rules">
      <input
        v-bind="field"
        :id="name"
        :type="type === 'password' ? passwordType : type"
        :placeholder="$t(placeholder)"
        class="relative my-2 w-full rounded-[0.25rem] bg-[#CED4DA] px-3 py-2 text-[#212529] placeholder-[#6C757D] outline-none focus:outline-2 focus:outline-offset-0 focus:outline-[#A9B5BF] disabled:bg-white disabled:placeholder-[#B7BBC0]"
        :class="[
          !meta.valid && meta.touched
            ? 'outline-2 -outline-offset-2 outline-[#DC3545]'
            : '',
          meta.valid && meta.touched
            ? 'outline-2 -outline-offset-2 outline-[#198754]'
            : '',
        ]"
      />
      <div
        class="absolute top-[2.7rem]"
        :class="[type === 'password' ? 'right-10' : 'right-2']"
      >
        <error-icon v-if="!meta.valid && meta.touched" />
        <success-icon v-if="meta.valid && meta.touched" />
      </div>
    </Field>

    <ErrorMessage
      :name="name"
      class="absolute left-0 top-[4.6rem] text-xs font-normal text-[#DC3545] sm:text-sm"
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
