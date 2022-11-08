<script setup>
import BaseButton from "@/components/UI/form/BaseButton.vue";
import BaseInput from "@/components/UI/form/BaseInput.vue";
import BaseDialog from "@/components/UI/BaseDialog.vue";
import LoadingCircle from "@/components/LoadingCircle.vue";

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
  <base-dialog>
    <div>
      <div
        class="flex flex-col items-center justify-center py-8 pb-10 gap-4"
        v-show="loading === false"
      >
        <div class="flex flex-col items-center">
          <h1 class="font-medium text-4xl text-white">Create new password</h1>
        </div>
        <div>
          <p class="font-normal text-base text-[#6C757D] text-center">
            Your new password must be different from previous used passwords
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
            Reset Password
          </base-button>
        </VeeForm>
      </div>
      <LoadingCircle v-if="loading === true" />
    </div>
  </base-dialog>
</template>
