<script setup>
import { useUserStore } from "@/stores/useUserStore";
import { useProfileStore } from "@/stores/useProfileStore";
import { computed } from "vue";

import UserImage from "@/views/User/Inputs/UserImage.vue";
import UserName from "@/views/User/Inputs/UserName.vue";
import UserEmail from "@/views/User/Inputs/UserEmail.vue";
import UserPassword from "@/views/User/Inputs/UserPassword.vue";

const profileStore = useProfileStore();
const user = computed(() => useUserStore().user);

const hideOpen = () => {
  const image = document.getElementById("image-output");

  profileStore.showButtons = false;

  profileStore.nameDisabled = true;
  profileStore.passwordDisabled = true;

  image.src = profileStore.defaultImage;
  profileStore.nameValue = user.value.name;
  profileStore.passwordValue = "garbagehahaha";
};
const toggleOpen = () => {
  open.value = true;
};
</script>

<template>
  <div class="w-full flex flex-col gap-6 pb-20">
    <h1 class="text-2xl ml-8 mb-24">My profile</h1>
    <section class="relative w-full bg-[#11101A] rounded-xl">
      <user-image />
      <div class="flex flex-col mx-20 2xl:mx-40 gap-9">
        <user-name @changes="toggleOpen" />
        <user-email :email="user.email" />
        <user-password @changes="toggleOpen" />
      </div>
    </section>
    <div class="relative">
      <div
        class="absolute right-0 flex text-base gap-2"
        v-if="profileStore.showButtons"
      >
        <base-button class="text-[#CED4DA]" @click="hideOpen">
          Cancel
        </base-button>
        <base-button :orange="true">Save changes</base-button>
      </div>
    </div>
  </div>
</template>
