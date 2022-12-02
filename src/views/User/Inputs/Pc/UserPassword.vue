<script setup>
import { useProfileStore } from "@/stores/useProfileStore";

import ChangePassword from "@/views/User/Inputs/Pc/ChangePassword.vue";
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
        class="top-[-1.3rem] text-base text-white capitalize"
      >
        password
      </label>
      <div class="w-[67%] 2xl:w-[65%] relative">
        <input
          type="password"
          name="show-password"
          id="show-password"
          :disabled="true"
          value="garbagevalue"
          class="w-full mb-10 border border-b border-white relative placeholder-[#6C757D] text-[#212529] bg-[#CED4DA] px-3 py-2 my-2 rounded-[0.25rem] disabled:bg-white disabled:placeholder-[#B7BBC0] outline-none focus:outline-2 focus:outline-offset-0 focus:outline-[#A9B5BF]"
        />
        <span
          class="text-xl absolute top-4 -right-16 cursor-pointer"
          @click="edit"
          >Edit
        </span>
      </div>
    </div>
    <change-password v-if="profileStore.changePassword" />
  </section>
</template>
