<script setup>
import { Form as VeeForm } from "vee-validate";
import axios from "@/config/axios/index.js";
import { setRegisterApiError } from "@/helpers/api-error-message";
import { useRegisterStore } from "@/stores/useRegisterStore";
import { computed } from "vue";
const store = useRegisterStore();
const loading = computed(() => store.loading);

const handleRegistration = async (values, actions) => {
  store.$patch({ loading: true });
  axios
    .post("register", {
      name: values.name,
      email: values.email,
      password: values.password,
      password_confirmation: values.password_confirmation,
    })
    .then(() => {
      store.$patch({ loading: false });
    })
    .catch((error) => {
      store.$patch({ loading: null });
      const errorsObj = error.response.data.errors;
      for (const errorName in errorsObj) {
        setRegisterApiError(errorName, actions);
      }
    });
};
</script>

<template>
  <VeeForm
    @submit="handleRegistration"
    class="font-helvetica"
    v-show="loading === null"
  >
    <div class="mt-14 mb-10 text-center sm:mt-8">
      <h1 class="mb-3 text-2xl font-medium text-white sm:text-4xl">
        {{ $t("landingView.create_account") }}
      </h1>
      <p class="font-normal text-[#6C757D]">
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

    <base-button :orange="true" class="mb-4 w-full text-white">{{
      $t("landingView.get_started")
    }}</base-button>
  </VeeForm>
</template>
