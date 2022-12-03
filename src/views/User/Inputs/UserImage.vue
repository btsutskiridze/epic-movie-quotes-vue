<script setup>
import { ref } from "vue";
import { Field } from "vee-validate";
import { useProfileStore } from "@/stores/useProfileStore";

const profileStore = useProfileStore();
const img = ref("");
const fileModel = ref(null);

const getImage = () => {
  document.getElementById("image_input").click();
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
    profileStore.showButtons = true;
  }
};
</script>

<template>
  <div
    class="flex flex-col items-center gap-3 justify-center relative top-[-4rem]"
  >
    <Field name="image_input" v-model="fileModel">
      <img
        id="image-output"
        :src="profileStore.defaultImage"
        alt="avatar"
        class="rounded-full w-44 h-44 object-cover"
      />
      <p class="cursor-pointer text-xl" @click="getImage">Upload new photo</p>
      <input
        id="image_input"
        type="file"
        class="absolute w-full left-0 h-full hidden"
        @input="setImage"
      />
    </Field>
  </div>
</template>
