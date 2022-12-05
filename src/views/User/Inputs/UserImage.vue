<script setup>
import { computed, ref } from "vue";
import { Field } from "vee-validate";
import { useUserStore } from "@/stores/useUserStore";
import { useProfileStore } from "@/stores/useProfileStore";

const userStore = useUserStore();
const profileStore = useProfileStore();
const img = ref("");
const fileModel = ref(null);

const imagePath = computed(() => {
  return userStore.user.avatar;
});

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
    class="relative top-[-4rem] flex flex-col items-center justify-center gap-3"
  >
    <Field name="image_input" v-model="fileModel">
      <img
        id="image-output"
        :src="imagePath"
        alt="avatar"
        class="h-44 w-44 rounded-full object-cover"
      />
      <p class="cursor-pointer text-xl" @click="getImage">
        {{ $t("profile.upload_new_photo") }}
      </p>
      <input
        id="image_input"
        type="file"
        accept="image/*"
        class="absolute left-0 hidden h-full w-full"
        @input="setImage"
      />
    </Field>
  </div>
</template>
