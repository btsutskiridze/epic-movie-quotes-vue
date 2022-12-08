<script setup>
import SuccessIcon from "@/components/icons/profile/SuccessIcon.vue";
import WarningIcon from "@/components/icons/profile/WarningIcon.vue";
import axios from "@/config/axios/index.js";
import { useUserStore } from "@/stores/useUserStore";

const props = defineProps({
  email: {
    type: String,
    required: true,
  },
  googleId: {
    type: String,
    required: false,
  },
  primary: {
    type: Boolean,
    required: false,
    default: false,
  },
  verified: {
    type: Boolean,
    required: false,
    default: true,
  },
  id: {
    type: Number,
    required: true,
  },
});

const handleRemove = () => {
  axios
    .delete("email/" + props.id)
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
    <label for="email" class="top-[-1.3rem] text-base capitalize text-white">
      {{ $t("profile.email") }}
    </label>
    <div class="relative w-[67%] 2xl:w-[65%]">
      <div class="flex flex-row gap-4">
        <input
          :id="id"
          type="email"
          :placeholder="$t('profile.email')"
          disabled
          :value="email"
          class="relative my-2 w-full rounded-[0.25rem] border px-3 py-2 text-white placeholder-[#6C757D] outline-none focus:outline-2 focus:outline-offset-0 focus:outline-[#A9B5BF]"
          :class="[
            googleId ? 'mb-20 border-[#fff] bg-[#fff] text-black' : '',
            primary && !googleId ? 'border-[#198754] bg-[#132826]' : '',
            !verified ? 'border-[#EC9524] bg-[#3D2B1C]' : '',
            verified && !primary ? 'border-[#fff] bg-[#fff] text-black' : '',
          ]"
        />
        <div class="relative">
          <p
            v-if="primary"
            class="absolute top-4 left-0 cursor-pointer whitespace-nowrap text-base"
          >
            {{ $t("profile.primary_email") }}
          </p>
          <p
            v-else-if="!verified"
            class="absolute top-4 left-0 flex cursor-pointer flex-row gap-3 whitespace-nowrap text-base"
          >
            <span class="border-r border-[#6C757D] pr-3"
              >{{ $t("profile.not_verified") }}
            </span>
            <span @click="handleRemove">{{ $t("profile.remove") }}</span>
          </p>
          <p
            v-else
            class="absolute top-4 left-0 flex cursor-pointer flex-row gap-3 whitespace-nowrap text-base"
          >
            <span class="border-r border-[#6C757D] pr-3" @click="makePrimary"
              >{{ $t("profile.make_this_primary") }}
            </span>
            <span @click="handleRemove">{{ $t("profile.remove") }}</span>
          </p>
        </div>
        <div class="absolute top-[1.4rem] right-6">
          <success-icon v-if="primary && !googleId" />
          <warning-icon v-else-if="!verified" />
        </div>
      </div>
    </div>
  </section>
</template>
