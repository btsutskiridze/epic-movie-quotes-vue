<script setup>
import { useProfileStore } from "@/stores/useProfileStore";

import ChangePassword from "@/components/layout/user-profile/inputs/pc/ChangePassword.vue";
defineProps({});

const profileStore = useProfileStore();
const edit = () => {
  profileStore.showButtons = true;
  profileStore.passwordDisabled = false;
  profileStore.changePassword = true;
};
</script>

<template>
  <section class="relative flex flex-col justify-center gap-1">
    <div>
      <label
        for="show-password"
        class="top-[-1.3rem] text-base capitalize text-white"
      >
        {{ $t("profile.password") }}
      </label>
      <div class="relative w-[67%] 2xl:w-[65%]">
        <div class="flex flex-row gap-4">
          <input
            type="password"
            name="show-password"
            id="show-password"
            :disabled="true"
            value="garbagevalue"
            class="relative my-2 mb-10 w-full rounded-[0.25rem] border border-b border-white bg-[#CED4DA] px-3 py-2 text-[#212529] placeholder-[#6C757D] outline-none focus:outline-2 focus:outline-offset-0 focus:outline-[#A9B5BF] disabled:bg-white disabled:placeholder-[#B7BBC0]"
          />
          <p class="relative">
            <span
              class="absolute top-4 left-0 cursor-pointer text-xl"
              @click="edit"
            >
              {{ $t("profile.edit") }}
            </span>
          </p>
        </div>
      </div>
    </div>
    <change-password v-if="profileStore.changePassword" />
  </section>
</template>
