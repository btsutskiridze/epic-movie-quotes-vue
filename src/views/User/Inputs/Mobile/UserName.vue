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
    <label for="name" class="top-[-1.3rem] text-base capitalize text-white">
      {{ $t("profile.username") }}
    </label>
    <div class="relative w-full border-b border-[#40414A]">
      <input
        id="name"
        type="text"
        v-model="useUserStore().user.name"
        :placeholder="$t('profile.username')"
        :disabled="true"
        class="relative my-2 w-full rounded-[0.25rem] bg-transparent px-3 py-2 text-white placeholder-[#6C757D] focus:outline-none"
      />
      <span class="absolute top-4 right-0 cursor-pointer text-xl" @click="edit">
        {{ $t("profile.edit") }}
      </span>
    </div>
  </section>
</template>
