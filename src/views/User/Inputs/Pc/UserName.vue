<script setup>
import { Field } from "vee-validate";
import { useProfileStore } from "@/stores/useProfileStore";
import { computed } from "vue";

const profileStore = useProfileStore();
const name = computed({
  set(value) {
    profileStore.nameValue = value;
  },
  get() {
    return profileStore.nameValue;
  },
});

const edit = () => {
  profileStore.showButtons = true;
  profileStore.nameDisabled = false;
};
</script>

<template>
  <section class="relative flex flex-col justify-center gap-1">
    <Field
      v-slot="{ field, errorMessage }"
      v-model="name"
      name="name"
      :rules="
        profileStore.nameDisabled ? '' : 'required|min:3|max:15|lowercase'
      "
    >
      <label for="name" class="top-[-1.3rem] text-base capitalize text-white">
        {{ $t("profile.username") }}
      </label>
      <div class="relative w-[67%] border-b border-[#40414A] 2xl:w-[65%]">
        <div class="flex flex-row gap-4">
          <input
            v-bind="field"
            id="name"
            type="text"
            :placeholder="$t('profile.username')"
            :disabled="profileStore.nameDisabled"
            class="relative my-2 mb-20 w-full rounded-[0.25rem] border border-b border-white bg-[#CED4DA] px-3 py-2 text-[#212529] placeholder-[#6C757D] outline-none focus:outline-2 focus:outline-offset-0 focus:outline-[#A9B5BF] disabled:bg-white disabled:placeholder-[#B7BBC0]"
          />
          <p class="relative">
            <span
              class="absolute top-4 left-0 cursor-pointer text-xl"
              @click="edit"
            >
              {{ $t("profile.edit") }}
            </span>
          </p>
        </div>
        <span
          v-if="!profileStore.nameDisabled"
          class="absolute left-0 top-[3.4rem] text-[#DC3545]"
        >
          {{ errorMessage }}
        </span>
      </div>
    </Field>
  </section>
</template>
