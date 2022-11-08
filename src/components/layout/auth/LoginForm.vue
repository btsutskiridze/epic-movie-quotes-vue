<script setup>
import { Form as VeeForm } from "vee-validate";
import axios from "@/config/axios/index.js";
import { setJwtToken } from "@/helpers/jwt/index.js";
import { setLoginApiError } from "@/helpers/api-error-message";
import router from "@/router/index.js";

import BaseDialog from "@/components/UI/BaseDialog.vue";
import BaseButton from "@/components/UI/form/BaseButton.vue";
import BaseInput from "@/components/UI/form/BaseInput.vue";
import BackArrowIcon from "@/components/icons/BackArrowIcon.vue";

import GoogleAuthorisation from "@/components/layout/auth/GoogleAuthorisation.vue";

import ForgetPassword from "@/components/layout/password/ForgetPassword.vue";
import MessageSent from "@/components/layout/password/MessageSent.vue";

import { computed, ref } from "vue";
// import { useForgetPassword } from "@/stores/forgetPassword";
import { useForgetPasswordStore } from "@/stores/useForgetPasswordStore";
const store = useForgetPasswordStore();

defineEmits(["close", "showRegister"]);
const remember = ref(null);
const emailSent = computed(() => store.emailSent);

const handleLogin = (values, actions) => {
  console.log({
    email: values.email,
    password: values.password,
  });
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
  <div>
    <base-dialog @close="$emit('close')">
      <VeeForm
        @submit="handleLogin"
        class="font-helvetica"
        v-if="emailSent === null"
      >
        <div class="text-center mt-14 mb-10">
          <div
            @click="$emit('close')"
            class="block sm:hidden absolute top-[4%] cursor-pointer py-2 pr-2"
          >
            <back-arrow-icon />
          </div>
          <h1
            class="text-white text-2xl sm:text-4xl font-medium mb-3 leading-9"
          >
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
            <p
              class="text-[#0D6EFD] underline cursor-pointer pl-1"
              @click="store.$patch({ emailSent: false })"
            >
              {{ $t("form.forgot_password") }}
            </p>
          </div>
        </div>
        <base-button :orange="true" class="text-white w-full mb-4">{{
          $t("landingView.get_started")
        }}</base-button>
      </VeeForm>
      <google-authorisation v-if="emailSent === null" />
      <span
        class="text-[#6C757D] text-base flex justify-center py-8"
        v-if="emailSent === null"
        >{{ $t("landingView.already_have_an_account") }}
        <span
          @click="$emit('showRegister')"
          class="text-[#0D6EFD] underline cursor-pointer pl-1"
        >
          {{ $t("landingView.sign_up") }}</span
        >
      </span>
      <forget-password v-if="emailSent === false" />
      <message-sent v-if="emailSent === true" />
    </base-dialog>
  </div>
</template>
