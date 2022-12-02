<script setup>
import { useProfileStore } from "@/stores/useProfileStore";
import { Field } from "vee-validate";
import { computed } from "vue";

import ChangePassword from "@/views/User/Inputs/Mobile/ChangePassword.vue";

defineProps({});
const profileStore = useProfileStore();
const value = computed(() => profileStore.dialogType);
</script>

<template>
  <div class="flex flex-col justify-center gap-6 mt-16">
    <section
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
    <div class="w-full flex items-center justify-between text-base gap-2 px-10">
      <base-button
        class="text-[#CED4DA]"
        @click="profileStore.openDialog = false"
      >
        Cancel
      </base-button>
      <base-button :orange="true">Save changes</base-button>
    </div>
  </div>
</template>
