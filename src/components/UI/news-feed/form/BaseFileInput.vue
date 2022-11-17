<script setup>
import { Field } from "vee-validate";
import CameraIcon from "@/components/icons/dialog/CameraIcon.vue";
import { ref } from "vue";

const img = ref("");

const props = defineProps({
  name: {
    type: String,
    required: false,
    default: "file",
  },
});

const getImage = () => {
  document.getElementById(props.name).click();
};
const setImage = (e) => {
  document.getElementById("container").classList.add("border-[#198754]");
  img.value = e.target.files.length !== 0 ? e.target.files[0].name : img.value;
};

const dragFile = (e) => {
  document.getElementById(props.name).files = e.dataTransfer.files;
  img.value = e.dataTransfer.files[0].name;
};
</script>

<template>
  <Field v-slot="{ handleChange, meta }" rules="required" :name="name">
    <div
      id="container"
      @drop.prevent="dragFile"
      @dragover.prevent
      class="relative flex flex-row gap-3 p-3 items-center justify-between border rounded-[0.25rem] border-[#6C757D]"
      :class="[
        !meta.valid && meta.touched ? 'border-[#DC3545]' : '',
        meta.valid ? 'border-[#198754]' : '',
      ]"
    >
      <p class="flex flex-row gap-3">
        <camera-icon />
        {{ img !== "" ? img : $t("fileInput.upload_image") }}
      </p>
      <span
        class="bg-[#462676] rounded-[0.24rem] p-[0.6rem] cursor-pointer"
        @click="getImage"
      >
        {{ $t("fileInput.choose_file") }}
      </span>
      <input
        type="file"
        class="absolute w-full left-0 h-full hidden"
        @change="handleChange"
        @input="setImage"
        :id="name"
      />
    </div>
  </Field>
</template>

<style></style>
