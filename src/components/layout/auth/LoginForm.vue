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
          <h1 class="text-white text-2xl sm:text-4xl font-medium mb-3">
            Log in to your account
          </h1>
          <p class="text-[#6C757D] font-normal">
            Welcome back! Please enter your details
          </p>
        </div>
        <base-input name="email" placeholder="Enter your email" />
        <base-input name="password" placeholder="Password" type="password" />

        <base-button :orange="true" class="text-white w-full mb-4">{{
          $t("landingView.get_started")
        }}</base-button>
        <base-button
          :outline="true"
          class="text-white w-full flex justify-center items-center gap-2"
          ><google-icon /><span>Sign up with Google</span></base-button
        >
        <span class="text-[#6C757D] text-base flex justify-center py-8"
          >Don't have an account?
          <span
            @click="$emit('showRegister')"
            class="text-[#0D6EFD] underline cursor-pointer pl-1"
          >
            Sign up</span
          ></span
        >
      </VeeForm>
    </base-dialog>
  </div>
</template>
