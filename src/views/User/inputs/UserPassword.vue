<script setup>
import { Field } from "vee-validate";
import { useProfileStore } from "@/stores/useProfileStore";
defineProps({});

const profileStore = useProfileStore();
const edit = () => {
  profileStore.showButtons = true;
  profileStore.passwordDisabled = false;
};
</script>

<template>
  <section class="relative flex flex-col justify-center gap-1">
    <Field
      v-slot="{ field, errorMessage }"
      name="password"
      rules="required"
      v-model="profileStore.passwordValue"
    >
      <label
        for="password"
        class="top-[-1.3rem] text-base text-white capitalize"
      >
        Password
      </label>
      <div class="w-[67%] 2xl:w-[65%] relative">
        <input
          v-bind="field"
          id="password"
          type="password"
          placeholder="password"
          :disabled="profileStore.passwordDisabled"
          class="w-full mb-20 border border-b border-white relative placeholder-[#6C757D] text-[#212529] bg-[#CED4DA] px-3 py-2 my-2 rounded-[0.25rem] disabled:bg-white disabled:placeholder-[#B7BBC0] outline-none focus:outline-2 focus:outline-offset-0 focus:outline-[#A9B5BF]"
        />
        <span
          class="text-xl absolute top-4 -right-16 cursor-pointer"
          @click="edit"
          >Edit
        </span>
        <span
          v-if="!profileStore.passwordDisabled"
          class="absolute left-0 top-[3.4rem] text-[#DC3545]"
        >
          {{ errorMessage }}
        </span>
      </div>
    </Field>
  </section>
</template>
