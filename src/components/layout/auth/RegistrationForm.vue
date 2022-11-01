<script setup>
import BaseDialog from "@/components/UI/BaseDialog.vue";
import BackArrowIcon from "@/components/icons/BackArrowIcon.vue";
import GoogleIcon from "@/components/icons/GoogleIcon.vue";
import { Form as VeeForm } from "vee-validate";
import BaseButton from "@/components/UI/form/BaseButton.vue";
import BaseInput from "@/components/UI/form/BaseInput.vue";
defineEmits(["close", "showLogin"]);

const onSubmit = (values) => {
  console.log(values);
};
</script>

<template>
  <div>
    <base-dialog @close="$emit('close')">
      <VeeForm @submit="onSubmit" class="font-helvetica">
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
        />
        <base-input
          name="email"
          labelName="form.email"
          placeholder="form.enter_your_email"
          type="email"
        />
        <base-input
          name="password"
          labelName="form.password"
          placeholder="form.password"
          type="password"
        />
        <base-input
          name="confirm_password"
          labelName="form.confirm_password"
          placeholder="form.password"
          type="password"
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
    </base-dialog>
  </div>
</template>
