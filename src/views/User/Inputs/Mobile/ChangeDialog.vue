<script setup>
import { useUserStore } from "@/stores/useUserStore";
import { useProfileStore } from "@/stores/useProfileStore";
import { Form as VeeForm, Field } from "vee-validate";
import { computed, ref } from "vue";
import { setRegisterApiError } from "@/helpers/api-error-message";
import axios from "@/config/axios/index.js";

import ChangePassword from "@/views/User/Inputs/Mobile/ChangePassword.vue";

defineProps({});
const profileStore = useProfileStore();
const value = computed(() => profileStore.dialogType);
const secondStep = ref(false);
const dataToSubmit = ref({});

const handleChange = (values) => {
  dataToSubmit.value = values;
  secondStep.value = true;
};

const submitChange = (values, actions) => {
  const data = {};
  if (dataToSubmit.value.name) {
    data["name"] = dataToSubmit.value.name;
  }

  if (dataToSubmit.value.password) {
    data["password"] = dataToSubmit.value.password;
  }

  axios
    .post("user/update", data, {
      headers: { "content-type": "multipart/form-data" },
    })
    .then(() => {
      useUserStore().getUser();
      profileStore.openDialog = false;
      profileStore.nameValue = useUserStore().user.name;
      secondStep.value = false;
    })
    .catch((e) => {
      secondStep.value = false;
      const errorsObj = e.response.data.errors;
      for (const errorName in errorsObj) {
        setRegisterApiError(errorName, actions);
      }
    });
};
</script>

<template>
  <VeeForm @submit="handleChange" v-slot="{ handleSubmit }">
    <div class="flex flex-col justify-center gap-6 mt-16">
      <section
        v-show="!secondStep"
        class="relative flex flex-col justify-center gap-1 px-10 min-h-[32vh] rounded-[0.6rem] bg-[#24222F]"
      >
        <Field
          v-if="value === 'name'"
          v-slot="{ field, errorMessage }"
          :name="'name'"
          rules="required|min:3|max:15|lowercase"
        >
          <div class="relative">
            <label for="name" class="top-[-1.3rem] text-base text-white"
              >Enter new username
            </label>
            <input
              v-bind="field"
              :id="'name'"
              :type="'text'"
              :placeholder="'username'"
              class="w-full border border-b border-white relative placeholder-[#6C757D] text-[#212529] bg-[#CED4DA] px-3 py-2 my-2 rounded-[0.25rem] disabled:bg-white disabled:placeholder-[#B7BBC0] outline-none focus:outline-2 focus:outline-offset-0 focus:outline-[#A9B5BF]"
            />

            <span class="absolute left-0 top-[5rem] text-[#DC3545]">
              {{ errorMessage }}
            </span>
          </div>
        </Field>
        <change-password v-else />
      </section>
      <section
        v-show="secondStep"
        class="relative flex flex-col justify-between gap-1 min-h-[28vh] rounded-[0.6rem] bg-[#24222F]"
      >
        <div class="h-[18vh] text-lg w-full flex justify-center items-center">
          <h1 class="leading-none">Are you sure to make changes ?</h1>
        </div>
        <div
          class="w-full h-[10vh] border-t border-[#40414A] flex items-center justify-between text-base gap-2 px-16"
        >
          <p
            class="cursor-pointer text-[#CED4DA]"
            @click="profileStore.openDialog = false"
          >
            Cancel
          </p>
          <base-button
            type="button"
            :orange="true"
            @click="handleSubmit($event, submitChange)"
            >Confirm</base-button
          >
        </div>
      </section>
      <div
        v-if="!secondStep"
        class="w-full flex items-center justify-between text-base gap-2 px-10"
      >
        <p
          class="cursor-pointer text-[#CED4DA]"
          @click="profileStore.openDialog = false"
        >
          Cancel
        </p>
        <base-button :orange="true">Save changes</base-button>
      </div>
    </div>
  </VeeForm>
</template>
