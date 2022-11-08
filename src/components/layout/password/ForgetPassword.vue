<script setup>
import { Form as VeeForm } from "vee-validate";

import LoadingCircle from "@/components/LoadingCircle.vue";
import BaseButton from "@/components/UI/form/BaseButton.vue";
import BaseInput from "@/components/UI/form/BaseInput.vue";
import { computed } from "vue";

import { useForgetPasswordStore } from "@/stores/useForgetPasswordStore";
const store = useForgetPasswordStore();
const loading = computed(() => store.loading);

const handlePasswordReset = (values, actions) => {
  store.sendPasswordResetMail(values, actions);
};
</script>

<template>
  <div>
    <div
      class="flex flex-col items-center justify-center py-8 gap-4"
      v-show="loading == false"
    >
      <div class="flex flex-col items-center">
        <h1 class="font-medium text-4xl text-white text-center">
          {{ $t("passwordReset.forgot_password") }}?
        </h1>
      </div>
      <div>
        <p class="font-normal text-base text-[#6C757D] text-center">
          {{ $t("passwordReset.enter_details") }}
        </p>
      </div>
      <VeeForm class="w-full" @submit="handlePasswordReset">
        <base-input
          name="email"
          labelName="form.email"
          placeholder="form.enter_your_email"
          rules="required|email"
          type="email"
        />
        <base-button :orange="true" class="w-full text-white">
          {{ $t("passwordReset.send_instructions") }}
        </base-button>
      </VeeForm>
      <p
        @click="store.$patch({ emailSent: null })"
        class="font-normal text-base text-[#6C757D] text-center mt-4"
      >
        {{ $t("passwordReset.back_to_login") }}
      </p>
    </div>
    <LoadingCircle v-if="loading === true" />
  </div>
</template>
