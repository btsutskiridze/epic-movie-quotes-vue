<script setup>
import { Field } from "vee-validate";
import { ref } from "vue";

import CameraIcon from "@/components/icons/dialog/CameraIcon.vue";

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
  path: {
    type: String,
    required: true,
  },
});

const img = ref("");
const fileModel = ref(null);

const getImage = () => {
  document.getElementById(props.name).click();
};
const setImage = (e) => {
  if (e.target.files.length !== 0) {
    const output = document.getElementById("image-output");
    output.src = URL.createObjectURL(e.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src);
    };

    fileModel.value = e.target.files[0];
    img.value = e.target.files[0].name;
  }
};

const dragFile = (e) => {
  const output = document.getElementById("image-output");
  output.src = URL.createObjectURL(e.dataTransfer.files[0]);
  output.onload = function () {
    URL.revokeObjectURL(output.src);
  };
  fileModel.value = e.dataTransfer.files[0];
  img.value = e.dataTransfer.files[0].name;
};
</script>

<template>
  <Field :rules="rules" :name="name" v-model="fileModel">
    <div class="relative">
      <img
        :src="path"
        alt="quote-image"
        id="image-output"
        class="w-full min-h-[22rem] max-h-[32rem] object-cover object-center rounded-[0.6rem]"
      />
      <div
        class="absolute flex items-center gap-2 justify-center top-0 w-full h-full"
        id="container"
        @drop.prevent="dragFile"
        @dragover.prevent
      >
        <section
          class="flex flex-col cursor-pointer items-center p-2 py-3 rounded-[0.6rem] bg-[#00000093]"
          @click="getImage"
        >
          <camera-icon />
          <span> {{ img !== "" ? img : "Change image" }} </span>
        </section>
      </div>
    </div>
    <input
      type="file"
      class="absolute w-full left-0 h-full hidden"
      @input="setImage"
      :id="name"
    />
  </Field>
</template>
