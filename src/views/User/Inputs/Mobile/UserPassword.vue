<script setup>
import { useProfileStore } from "@/stores/useProfileStore";
defineProps({});

const profileStore = useProfileStore();
const edit = () => {
  profileStore.dialogType = "password";
  profileStore.openDialog = true;
};
</script>

<template>
  <section class="relative flex flex-col justify-center gap-1">
    <label for="password" class="top-[-1.3rem] text-base capitalize text-white">
      {{ $t("profile.password") }}
    </label>
    <div class="relative w-full border-b border-[#40414A]">
      <input
        name="password"
        type="password"
        id="password"
        value="garbageValuehaha"
        disabled
        class="relative my-2 w-full rounded-[0.25rem] bg-transparent px-3 py-2 text-white placeholder-[#6C757D] focus:outline-none"
      />
      <span class="absolute top-4 right-0 cursor-pointer text-xl" @click="edit"
        >{{ $t("profile.edit") }}
      </span>
    </div>
  </section>
</template>
