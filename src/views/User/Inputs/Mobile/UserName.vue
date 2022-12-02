<script setup>
import { useUserStore } from "@/stores/useUserStore";
import { useProfileStore } from "@/stores/useProfileStore";

const profileStore = useProfileStore();

const edit = () => {
  profileStore.dialogType = "name";
  profileStore.openDialog = true;
};
</script>

<template>
  <section class="relative flex flex-col justify-center gap-1">
    <label for="name" class="top-[-1.3rem] text-base text-white capitalize"
      >Username
    </label>
    <div class="w-full relative border-b border-[#40414A]">
      <input
        id="name"
        type="text"
        v-model="useUserStore().user.name"
        placeholder="username"
        :disabled="true"
        class="w-full relative placeholder-[#6C757D] text-white bg-transparent px-3 py-2 my-2 rounded-[0.25rem] focus:outline-none"
      />
      <span class="text-xl absolute top-4 right-0 cursor-pointer" @click="edit"
        >Edit</span
      >
    </div>
  </section>
</template>
