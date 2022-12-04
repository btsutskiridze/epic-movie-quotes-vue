<script setup>
import BackArrowIcon from "@/components/icons/BackArrowIcon.vue";

import { Form as VeeForm } from "vee-validate";
import axios from "@/config/axios/authAxios.js";
import router from "@/router/index.js";
import { ref } from "vue";
import { useAuthStore } from "@/stores/useAuthStore";
import { setLoginApiError } from "@/helpers/api-error-message";
const remember = ref(null);

const authStore = useAuthStore();
const handleLogin = async (values, actions) => {
  const data = {
    password: values.password,
    remember: remember.value ? true : false,
  };
  if (ValidateEmail(values.email)) {
    data["email"] = values.email;
  } else {
    data["name"] = values.email;
  }

  try {
    await axios.post("login", data);
    authStore.authenticated = true;
    router.push({ name: "news-feed" });
  } catch (error) {
    const errorsObj = error.response.data.errors;
    for (const errorName in errorsObj) {
      setLoginApiError(errorName, actions);
    }
  }
};

function ValidateEmail(inputText) {
  var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  if (inputText.match(mailformat)) {
    return true;
  } else {
    return false;
  }
}
</script>

<template>
  <VeeForm @submit="handleLogin" class="font-helvetica">
    <div class="mt-14 mb-10 text-center">
      <router-link
        :to="{ name: 'landing' }"
        class="absolute top-[4%] block cursor-pointer py-2 pr-2 sm:hidden"
      >
        <back-arrow-icon />
      </router-link>
      <h1 class="mb-3 text-2xl font-medium leading-9 text-white sm:text-4xl">
        {{ $t("landingView.login_to_your_account") }}
      </h1>
      <p class="font-normal text-[#6C757D]">
        {{ $t("landingView.welcome_back_please_enter_your_details") }}
      </p>
    </div>
    <base-input
      name="email"
      labelName="form.email"
      placeholder="form.enter_your_email"
      rules="required|min:3"
      type="email"
    />
    <base-input
      name="password"
      labelName="form.password"
      placeholder="form.password"
      rules="required|min:8|max:15|lowercase"
      type="password"
    />
    <div class="relative -top-1 mb-2 flex flex-row justify-between">
      <div>
        <input
          type="checkbox"
          name="remember_me"
          v-model="remember"
          id="remember_me"
        />
        <label for="remember_me" class="relative ml-1 capitalize text-white"
          >{{ $t("form.remember_me") }}
        </label>
      </div>
      <div>
        <router-link
          :to="{ name: 'forget-password' }"
          class="cursor-pointer pl-1 text-[#0D6EFD] underline"
        >
          {{ $t("form.forgot_password") }}
        </router-link>
      </div>
    </div>
    <base-button :orange="true" class="mb-4 w-full text-white">{{
      $t("landingView.get_started")
    }}</base-button>
  </VeeForm>
</template>
