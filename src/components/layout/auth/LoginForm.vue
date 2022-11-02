<script setup>
import BaseDialog from "@/components/UI/BaseDialog.vue";
import BackArrowIcon from "@/components/icons/BackArrowIcon.vue";
import GoogleIcon from "@/components/icons/GoogleIcon.vue";
import { Form as VeeForm } from "vee-validate";
import BaseButton from "@/components/UI/form/BaseButton.vue";
import BaseInput from "@/components/UI/form/BaseInput.vue";
defineEmits(["close", "showRegister"]);

const onSubmit = (values) => {
  console.log(values);
};
</script>

<template>
  <div>
    <base-dialog @close="$emit('close')">
      <VeeForm @submit="onSubmit" class="font-helvetica">
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
            <input type="checkbox" name="remember_me" id="remember_me" />
            <label for="remember_me" class="text-white relative capitalize ml-1"
              >{{ $t("form.remember_me") }}
            </label>
          </div>
          <div>
            <p class="text-[#0D6EFD] underline cursor-pointer pl-1">
              {{ $t("form.forgot_password") }}
            </p>
          </div>
        </div>
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
          >{{ $t("landingView.dont_have_account") }}
          <span
            @click="$emit('showRegister')"
            class="text-[#0D6EFD] underline cursor-pointer pl-1"
          >
            {{ $t("landingView.sign_up") }}
          </span></span
        >
      </VeeForm>
    </base-dialog>
  </div>
</template>
