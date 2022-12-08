<script setup>
import { Form as VeeForm, Field } from "vee-validate";
import { useUserStore } from "@/stores/useUserStore";
import router from "@/router";
import axios from "@/config/axios/index.js";
import { ref } from "vue";
import { setRegisterApiError } from "@/helpers/api-error-message";
import { useProfileStore } from "@/stores/useProfileStore";

const loading = ref(false);
const handleSubmit = (values, actions) => {
  console.log(values);
  loading.value = true;
  axios
    .post("emails/store", {
      email: values.email,
    })
    .then(() => {
      useUserStore().getUser();
      loading.value = false;
      useProfileStore().newEmailAdded = true;
      router.push({ name: "user-profile" });
    })
    .catch((error) => {
      loading.value = false;
      const errorsObj = error.response.data.errors;
      for (const errorName in errorsObj) {
        setRegisterApiError(errorName, actions);
      }
    });
};
</script>

<template>
  <news-feed-dialog top="" @close="$router.push({ name: 'user-profile' })">
    <template #header>
      <span class="flex w-full">{{ $t("profile.add_new_email") }}</span>
    </template>
    <VeeForm
      v-show="!loading"
      class="flex min-h-[12rem] flex-col justify-center gap-6 pt-10"
      @submit="handleSubmit"
    >
      <Field
        v-slot="{ field, errorMessage }"
        name="email"
        rules="required|email"
      >
        <div class="relative">
          <label for="name" class="top-[-1.3rem] text-base text-white"
            >{{ $t("profile.new_email") }}
          </label>
          <input
            v-bind="field"
            id="email"
            type="text"
            :placeholder="$t('profile.enter_new_email')"
            class="relative my-2 w-full rounded-[0.25rem] border border-b border-white bg-[#CED4DA] px-3 py-2 text-[#212529] placeholder-[#6C757D] outline-none focus:outline-2 focus:outline-offset-0 focus:outline-[#A9B5BF] disabled:bg-white disabled:placeholder-[#B7BBC0]"
          />

          <span class="absolute left-0 top-[5rem] text-[#DC3545]">
            {{ errorMessage }}
          </span>
        </div>
      </Field>
      <div
        class="flex w-full items-center justify-end gap-6 text-base text-white"
      >
        <p
          class="cursor-pointer text-[#CED4DA]"
          @click="$router.push({ name: 'user-profile' })"
        >
          {{ $t("profile.cancel") }}
        </p>
        <base-button :orange="true">{{ $t("profile.add") }}</base-button>
      </div>
    </VeeForm>
    <div v-if="loading" class="flex w-full items-center justify-center">
      <div class="flex h-32 w-32 items-center">
        <loading-circle height="" />
      </div>
    </div>
  </news-feed-dialog>
</template>
