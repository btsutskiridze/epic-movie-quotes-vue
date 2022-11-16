<script setup>
import BackArrowIcon from "@/components/icons/BackArrowIcon.vue";

import { Form as VeeForm } from "vee-validate";
import axios from "@/config/axios/index.js";
import router from "@/router/index.js";
import { ref } from "vue";

import { setJwtToken } from "@/helpers/jwt/index.js";
import { setLoginApiError } from "@/helpers/api-error-message";

const remember = ref(null);

const handleLogin = (values, actions) => {
  axios
    .post("login", {
      email: values.email,
      password: values.password,
    })
    .then((response) => {
      if (remember.value) {
        setJwtToken(
          response.data.access_token,
          response.data.expires_in,
          365 * 24 * 60 * 60
        );
      } else {
        setJwtToken(response.data.access_token, response.data.expires_in);
      }

      router.push({ name: "news-feed" });
    })
    .catch((error) => {
      const errorsObj = error.response.data.errors;
      for (const errorName in errorsObj) {
        setLoginApiError(errorName, actions);
      }
    });
};
</script>

<template>
  <VeeForm @submit="handleLogin" class="font-helvetica">
    <div class="text-center mt-14 mb-10">
      <router-link
        :to="{ name: 'home' }"
        class="block sm:hidden absolute top-[4%] cursor-pointer py-2 pr-2"
      >
        <back-arrow-icon />
      </router-link>
      <h1 class="text-white text-2xl sm:text-4xl font-medium mb-3 leading-9">
        {{ $t("landingView.login_to_your_account") }}
      </h1>
      <p class="text-[#6C757D] font-normal">
        {{ $t("landingView.welcome_back_please_enter_your_details") }}
      </p>
    </div>
    <base-input
      name="email"
      labelName="form.email"
      placeholder="form.enter_your_email"
      rules="required|email"
      type="email"
    />
    <base-input
      name="password"
      labelName="form.password"
      placeholder="form.password"
      rules="required|min:8|max:15|lowercase"
      type="password"
    />
    <div class="mb-2 -top-1 relative flex flex-row justify-between">
      <div>
        <input
          type="checkbox"
          name="remember_me"
          v-model="remember"
          id="remember_me"
        />
        <label for="remember_me" class="text-white relative capitalize ml-1"
          >{{ $t("form.remember_me") }}
        </label>
      </div>
      <div>
        <router-link
          :to="{ name: 'forget-password' }"
          class="text-[#0D6EFD] underline cursor-pointer pl-1"
        >
          {{ $t("form.forgot_password") }}
        </router-link>
      </div>
    </div>
    <base-button :orange="true" class="text-white w-full mb-4">{{
      $t("landingView.get_started")
    }}</base-button>
  </VeeForm>
</template>
