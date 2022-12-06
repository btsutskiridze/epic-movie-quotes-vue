<script setup>
import WarningIcon from "@/components/icons/profile/WarningIcon.vue";
import axios from "@/config/axios/index.js";
import { useUserStore } from "@/stores/useUserStore";

const props = defineProps({
  email: {
    type: String,
    required: true,
  },

  verified: {
    type: Boolean,
    required: false,
    default: true,
  },
  id: {
    type: String,
    required: true,
  },
});

const handleRemove = () => {
  axios
    .post("delete/" + props.id)
    .then(() => {
      useUserStore().getUser();
    })
    .catch((e) => {
      console.log(e);
    });
};

const makePrimary = () => {
  axios
    .post("emails/" + props.id + "/make-primary")
    .then(() => {
      useUserStore().getUser();
    })
    .catch((e) => {
      console.log(e);
    });
};
</script>
<template>
  <section class="relative flex flex-col justify-center gap-1">
    <div class="relative w-full border-b border-[#40414A] pb-4">
      <!-- :class="[googleId ? '' : 'border-b border-[#40414A]']" -->

      <div class="flex flex-col gap-4">
        <input
          :id="id"
          type="email"
          :placeholder="$t('profile.email')"
          disabled
          :value="email"
          class="relative my-2 w-full rounded-[0.25rem] border border-none bg-transparent py-2 text-white placeholder-[#6C757D] outline-none focus:outline-2 focus:outline-offset-0 focus:outline-[#A9B5BF]"
        />
        <div class="relative">
          <p
            v-if="!verified"
            class="flex cursor-pointer flex-row items-center justify-between gap-3 whitespace-nowrap text-base"
          >
            <span
              class="flex flex-row items-center gap-2 italic text-[#EC9524]"
            >
              <warning-icon />
              <span class=""> Not verified </span>
            </span>
            <span @click="handleRemove" class="text-[#CED4DA]">Remove</span>
          </p>
          <p
            v-else
            class="flex cursor-pointer flex-row items-center justify-between gap-3 whitespace-nowrap text-base"
          >
            <base-button :outline="true" @click="makePrimary"
              >Make this primary
            </base-button>
            <span @click="handleRemove" class="text-[#CED4DA]">Remove</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
