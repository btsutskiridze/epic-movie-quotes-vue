<script setup>
import BaseInput from "@/components/UI/form/BaseInput.vue";

import { Form as VeeForm } from "vee-validate";
import { computed, onBeforeMount } from "vue";

import { useResetPasswordStore } from "@/stores/useResetPasswordStore";
const store = useResetPasswordStore();

const loading = computed(() => store.loading);

onBeforeMount(() => {
  store.getEmailAndToken();
});

const handlePasswordReset = (values, actions) => {
  store.changePassword(values, actions);
};
</script>

<template>
  <div>
    <div
      class="flex flex-col items-center justify-center py-8 pb-10 gap-4"
      v-show="loading === false"
    >
      <div class="flex flex-col items-center">
        <h1 class="font-medium text-4xl text-white text-center">
          {{ $t("passwordReset.create_new_password") }}
        </h1>
      </div>
      <div>
        <p class="font-normal text-base text-[#6C757D] text-center">
          {{ $t("passwordReset.password_must_be_different") }}
        </p>
      </div>
      <VeeForm class="w-full" @submit="handlePasswordReset">
        <base-input
          name="password"
          labelName="form.password"
          placeholder="form.password"
          type="password"
          rules="required|min:8|max:15|lowercase"
        />
        <base-input
          name="password_confirmation"
          labelName="form.confirm_password"
          placeholder="form.password"
          type="password"
          rules="required|confirmed:@password"
        />

        <base-button :orange="true" class="w-full text-white">
          {{ $t("passwordReset.reset_password") }}
        </base-button>
      </VeeForm>
    </div>
    <LoadingCircle v-if="loading === true" />
  </div>
</template>
