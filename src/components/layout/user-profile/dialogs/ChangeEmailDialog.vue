<script setup>
import { useUserStore } from "@/stores/useUserStore";
import { useProfileStore } from "@/stores/useProfileStore";
import { Form as VeeForm, Field } from "vee-validate";
import { ref } from "vue";
import { setRegisterApiError } from "@/helpers/api-error-message";
import axios from "@/config/axios/index.js";

defineProps({});
const profileStore = useProfileStore();
const secondStep = ref(false);
const dataToSubmit = ref({});
const loading = ref(false);
const handleChange = (values) => {
  dataToSubmit.value = values;
  secondStep.value = true;
};

const submitChange = (_, actions) => {
  loading.value = true;
  axios
    .post("emails/store", {
      email: dataToSubmit.value.email,
    })
    .then(() => {
      useUserStore().getUser();
      loading.value = false;
      useProfileStore().newEmailAdded = true;
      useProfileStore().openEmailDialog = false;
    })
    .catch((error) => {
      loading.value = false;
      secondStep.value = false;
      const errorsObj = error.response.data.errors;
      for (const errorName in errorsObj) {
        setRegisterApiError(errorName, actions);
      }
    });
};
</script>

<template>
  <VeeForm @submit="handleChange" v-slot="{ handleSubmit }">
    <div class="mt-16 flex flex-col justify-center gap-6">
      <div v-if="loading" class="flex w-full items-center justify-center">
        <div class="flex h-32 w-32 items-center">
          <loading-circle height="" />
        </div>
      </div>
      <section
        v-show="!secondStep && !loading"
        class="relative flex min-h-[32vh] flex-col justify-center gap-1 rounded-[0.6rem] bg-[#24222F] px-10"
      >
        <Field
          v-slot="{ field, errorMessage }"
          name="email"
          rules="required|email"
        >
          <div class="relative">
            <label for="name" class="top-[-1.3rem] text-base text-white">
              Add new email
            </label>
            <input
              v-bind="field"
              id="email"
              type="email"
              :placeholder="$t('profile.email')"
              class="relative my-2 w-full rounded-[0.25rem] border border-b border-white bg-[#CED4DA] px-3 py-2 text-[#212529] placeholder-[#6C757D] outline-none focus:outline-2 focus:outline-offset-0 focus:outline-[#A9B5BF] disabled:bg-white disabled:placeholder-[#B7BBC0]"
            />

            <span class="absolute left-0 top-[5rem] text-[#DC3545]">
              {{ errorMessage }}
            </span>
          </div>
        </Field>
      </section>
      <section
        v-show="secondStep && !loading"
        class="relative flex min-h-[28vh] flex-col justify-between gap-1 rounded-[0.6rem] bg-[#24222F]"
      >
        <div class="flex h-[18vh] w-full items-center justify-center text-lg">
          <h1 class="leading-none">{{ $t("profile.want_to_change") }}?</h1>
        </div>
        <div
          class="flex h-[10vh] w-full items-center justify-between gap-2 border-t border-[#40414A] px-16 text-base"
        >
          <p class="cursor-pointer text-[#CED4DA]" @click="secondStep = false">
            {{ $t("profile.cancel") }}
          </p>
          <base-button
            type="button"
            :orange="true"
            @click="handleSubmit($event, submitChange)"
            >{{ $t("profile.confirm") }}</base-button
          >
        </div>
      </section>
      <div
        v-if="!secondStep"
        class="flex w-full items-center justify-between gap-2 px-10 text-base"
      >
        <p
          class="cursor-pointer text-[#CED4DA]"
          @click="profileStore.openEmailDialog = false"
        >
          {{ $t("profile.cancel") }}
        </p>
        <base-button :orange="true">{{
          $t("profile.save_changes")
        }}</base-button>
      </div>
    </div>
  </VeeForm>
</template>
