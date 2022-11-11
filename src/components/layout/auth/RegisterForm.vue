<script setup>
import { Form as VeeForm } from "vee-validate";
import axios from "@/config/axios/index.js";
import { setRegisterApiError } from "@/helpers/api-error-message";
import { useRegisterStore } from "@/stores/useRegisterStore";
import { computed } from "vue";
const store = useRegisterStore();
const loading = computed(() => store.loading);

const handleSubmit = async (values, actions) => {
  store.$dispatch({ loading: true });
  axios
    .post("register", {
      name: values.name,
      email: values.email,
      password: values.password,
      password_confirmation: values.password_confirmation,
    })
    .then(() => {
      store.$dispatch({ loading: false });
    })
    .catch((error) => {
      store.$dispatch({ loading: null });
      const errorsObj = error.response.data.errors;
      for (const errorName in errorsObj) {
        setRegisterApiError(errorName, actions);
      }
    });
};
</script>

<template>
  <VeeForm
    @submit="handleSubmit"
    class="font-helvetica"
    v-show="loading === null"
  >
    <div class="text-center mt-14 sm:mt-8 mb-10">
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
  </VeeForm>
</template>
