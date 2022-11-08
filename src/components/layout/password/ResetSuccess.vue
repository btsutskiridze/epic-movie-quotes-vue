<script setup>
import BaseButton from "@/components/UI/form/BaseButton.vue";
import BigSuccess from "@/components/icons/BigSuccessIcon.vue";
import BaseDialog from "@/components/UI/BaseDialog.vue";
import { onBeforeMount } from "vue";

import { useAutoLoginStore } from "@/stores/useAutoLoginStore";
const store = useAutoLoginStore();
onBeforeMount(() => {
  store.getEmail();
});

const handleAutoLogin = () => {
  store.autoLogin();
};
</script>

<template>
  <base-dialog>
    <div class="flex flex-col items-center justify-center py-16 gap-8">
      <div class="flex flex-col items-center gap-6">
        <big-success />
        <h1 class="font-medium text-4xl text-white">Success!</h1>
      </div>
      <div>
        <p class="font-normal text-base text-white">
          Your password changed successfully
        </p>
      </div>
      <base-button
        :orange="true"
        class="w-full text-white"
        @click="handleAutoLogin"
      >
        Go to my news feed
      </base-button>
    </div>
  </base-dialog>
</template>
