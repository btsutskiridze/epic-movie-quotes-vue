<script setup>
import { Field } from "vee-validate";
import CameraIcon from "@/components/icons/dialog/CameraIcon.vue";
import { ref } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: false,
    default: "file",
  },
  rules: {
    type: String,
    required: false,
    default: "required",
  },
});
const img = ref("");
const fileModel = ref(null);
const wastouched = ref(false);
const getImage = () => {
  document.getElementById(props.name).click();
};
const setImage = (e) => {
  if (!wastouched.value) wastouched.value = true;
  fileModel.value = e.target.files[0];
  document.getElementById("container").classList.add("border-[#198754]");
  img.value = e.target.files.length !== 0 ? e.target.files[0].name : img.value;
};

const dragFile = (e) => {
  if (!wastouched.value) wastouched.value = true;
  fileModel.value = e.dataTransfer.files[0];
  img.value = e.dataTransfer.files[0].name;
};
</script>

<template>
  <Field
    v-slot="{ handleChange, meta }"
    :rules="rules"
    :name="name"
    v-model="fileModel"
  >
    <div
      id="container"
      @drop.prevent="dragFile"
      @dragover.prevent
      class="relative flex flex-row items-center justify-between gap-3 rounded-[0.25rem] border border-[#6C757D] p-3"
      :class="[
        !meta.valid && meta.touched ? 'border-[#DC3545]' : '',
        meta.valid && meta.touched ? 'border-[#198754]' : '',
      ]"
    >
      <p class="flex flex-row gap-3 break-words break-all">
        <camera-icon />
        {{ img !== "" ? img : $t("fileInput.upload_image") }}
      </p>
      <span
        class="cursor-pointer rounded-[0.24rem] bg-[#462676] p-[0.6rem]"
        @click="getImage"
      >
        {{ $t("fileInput.choose_file") }}
      </span>
      <input
        type="file"
        accept="image/*"
        class="absolute left-0 hidden h-full w-full"
        @change="handleChange"
        @input="setImage"
        :id="name"
      />
    </div>
  </Field>
</template>

<style></style>
