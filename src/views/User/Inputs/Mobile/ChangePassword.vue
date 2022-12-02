<script setup>
import { Field } from "vee-validate";
import { ref } from "vue";

import OpenedEye from "@/components/icons/OpenedEyeIcon.vue";
import ClosedEye from "@/components/icons/ClosedEyeIcon.vue";
const passShow = ref(false);
const confShow = ref(false);
</script>

<template>
  <div class="border border-[#373740] bg-[#181624] w-full p-6 rounded my-6">
    <h1 class="text-base">Passwords should contain:</h1>
    <ul class="text-sm decoration-slice list-disc list-inside">
      <li class="text-[#9C9A9A]">8 or more characters</li>
      <li class="marker:text-green-600">15 lowercase character</li>
    </ul>
  </div>
  <Field
    v-slot="{ field, errorMessage }"
    name="password"
    rules="required|min:8|max:15|lowercase"
  >
    <label for="password" class="top-[-1.3rem] text-base text-white capitalize">
      New password
    </label>
    <div class="w-full relative">
      <input
        v-bind="field"
        :type="passShow ? 'text' : 'password'"
        id="password"
        placeholder="password"
        class="w-full mb-10 border border-b border-white relative placeholder-[#6C757D] text-[#212529] bg-[#CED4DA] px-3 py-2 my-2 rounded-[0.25rem] disabled:bg-white disabled:placeholder-[#B7BBC0] outline-none focus:outline-2 focus:outline-offset-0 focus:outline-[#A9B5BF]"
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
      class="top-[-1.3rem] text-base text-white capitalize"
    >
      Confirm new password
    </label>
    <div class="w-full relative">
      <input
        v-bind="field"
        :type="confShow ? 'text' : 'password'"
        id="password_confirmation"
        placeholder="password"
        class="w-full mb-10 border border-b border-white relative placeholder-[#6C757D] text-[#212529] bg-[#CED4DA] px-3 py-2 my-2 rounded-[0.25rem] disabled:bg-white disabled:placeholder-[#B7BBC0] outline-none focus:outline-2 focus:outline-offset-0 focus:outline-[#A9B5BF]"
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
