<script setup>
import { Field } from "vee-validate";
import { ref } from "vue";

import OpenedEye from "@/components/icons/OpenedEyeIcon.vue";
import ClosedEye from "@/components/icons/ClosedEyeIcon.vue";
const passShow = ref(false);
const confShow = ref(false);
</script>

<template>
  <div class="my-6 w-full rounded border border-[#373740] bg-[#181624] p-6">
    <h1 class="text-base">
      {{ $t("profile.password_should_contain") }}
    </h1>
    <ul class="list-inside list-disc decoration-slice text-sm">
      <li class="text-[#9C9A9A]">
        {{ $t("profile.8_or_more_char") }}
      </li>
      <li class="marker:text-green-600">
        {{ $t("profile.15_lowercase_char") }}
      </li>
    </ul>
  </div>
  <Field
    v-slot="{ field, errorMessage }"
    name="password"
    rules="required|min:8|max:15|lowercase"
  >
    <label for="password" class="top-[-1.3rem] text-base capitalize text-white">
      {{ $t("profile.new_password") }}
    </label>
    <div class="relative w-full">
      <input
        v-bind="field"
        :type="passShow ? 'text' : 'password'"
        id="password"
        :placeholder="$t('profile.password')"
        class="relative my-2 mb-10 w-full rounded-[0.25rem] border border-b border-white bg-[#CED4DA] px-3 py-2 text-[#212529] placeholder-[#6C757D] outline-none focus:outline-2 focus:outline-offset-0 focus:outline-[#A9B5BF] disabled:bg-white disabled:placeholder-[#B7BBC0]"
      />
      <span class="absolute left-0 top-[3.4rem] text-[#DC3545]">
        {{ errorMessage }}
      </span>
      <p class="absolute top-4 right-2 cursor-pointer">
        <closed-eye v-if="!passShow" @click="passShow = true" />
        <opened-eye v-if="passShow" @click="passShow = false" />
      </p>
    </div>
  </Field>
  <Field
    v-slot="{ field, errorMessage }"
    name="password_confirmation"
    rules="required|confirmed:@password"
  >
    <label
      for="password_confirmation"
      class="top-[-1.3rem] text-base capitalize text-white"
    >
      {{ $t("profile.confirm_new_password") }}
    </label>
    <div class="relative w-full">
      <input
        v-bind="field"
        :type="confShow ? 'text' : 'password'"
        id="password_confirmation"
        :placeholder="$t('profile.password')"
        class="relative my-2 mb-10 w-full rounded-[0.25rem] border border-b border-white bg-[#CED4DA] px-3 py-2 text-[#212529] placeholder-[#6C757D] outline-none focus:outline-2 focus:outline-offset-0 focus:outline-[#A9B5BF] disabled:bg-white disabled:placeholder-[#B7BBC0]"
      />
      <span class="absolute left-0 top-[3.4rem] text-[#DC3545]">
        {{ errorMessage }}
      </span>
      <p class="absolute top-4 right-2 cursor-pointer">
        <closed-eye v-if="!confShow" @click="confShow = true" />
        <opened-eye v-if="confShow" @click="confShow = false" />
      </p>
    </div>
  </Field>
</template>
