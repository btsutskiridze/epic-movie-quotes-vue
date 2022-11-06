<script setup>
import axios from "@/config/axios/index.js";
import { Form as VeeForm } from "vee-validate";
import { ref } from "vue";
import { setRegisterApiError } from "@/helpers/api-error-message";

import BaseButton from "@/components/UI/form/BaseButton.vue";
import BaseInput from "@/components/UI/form/BaseInput.vue";
import BaseDialog from "@/components/UI/BaseDialog.vue";
import BackArrowIcon from "@/components/icons/BackArrowIcon.vue";
import GoogleIcon from "@/components/icons/GoogleIcon.vue";
import LoadingCircle from "@/components/LoadingCircle.vue";

import VerifyEmail from "@/components/layout/verification/VerifyEmail.vue";

defineEmits(["close", "showLogin"]);

const loading = ref(null);
const handleSubmit = async (values, actions) => {
  loading.value = true;
  axios
    .post("register", {
      name: values.name,
      email: values.email,
      password: values.password,
      password_confirmation: values.password_confirmation,
    })
    .then(() => {
      loading.value = false;
    })
    .catch((error) => {
      const errorsObj = error.response.data.errors;
      for (const errorName in errorsObj) {
        setRegisterApiError(errorName, actions);
      }
    });
};
</script>

<template>
  <div>
    <base-dialog @close="$emit('close')">
      <VeeForm
        @submit="handleSubmit"
        class="font-helvetica"
        v-if="loading === null"
      >
        <div class="text-center mt-14 sm:mt-8 mb-10">
          <div
            @click="$emit('close')"
            class="block sm:hidden absolute top-[4%] cursor-pointer py-2 pr-2"
          >
            <back-arrow-icon />
          </div>
          <h1 class="text-white text-2xl sm:text-4xl font-medium mb-3">
            {{ $t("landingView.create_account") }}
          </h1>
          <p class="text-[#6C757D] font-normal">
            {{ $t("landingView.start_your_journey") }}
          </p>
        </div>
        <base-input
          name="name"
          labelName="form.name"
          placeholder="form.enter_your_name"
          rules="required|min:3|max:15|lowercase"
        />
        <base-input
          name="email"
          labelName="form.email"
          placeholder="form.enter_your_email"
          type="email"
          rules="required|email"
        />
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

        <base-button :orange="true" class="text-white w-full mb-4">{{
          $t("landingView.get_started")
        }}</base-button>
        <base-button
          :outline="true"
          class="text-white w-full flex justify-center items-center gap-2"
          ><google-icon /><span>{{
            $t("landingView.sign_up_with_google")
          }}</span></base-button
        >
        <span class="text-[#6C757D] text-base flex justify-center py-8"
          >{{ $t("landingView.already_have_an_account") }}
          <span
            @click="$emit('showLogin')"
            class="text-[#0D6EFD] underline cursor-pointer pl-1"
          >
            {{ $t("landingView.log_in") }}</span
          ></span
        >
      </VeeForm>
      <loading-circle v-if="loading === true" />
      <verify-email v-else-if="loading === false" />
    </base-dialog>
  </div>
</template>
