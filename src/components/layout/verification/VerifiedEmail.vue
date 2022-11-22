<script setup>
import MessageSent from "@/components/icons/MessageSentIcon.vue";
import BackArrowIcon from "@/components/icons/BackArrowIcon.vue";

import { onBeforeMount, ref } from "vue";
import axios from "@/config/axios/index.js";
import { useRoute } from "vue-router";
import { useAutoLoginStore } from "@/stores/useAutoLoginStore";

const getVerified = ref(undefined);
const loading = ref(true);

const store = useAutoLoginStore();

const handleAutoLogin = () => {
  store.autoLogin();
};

onBeforeMount(async () => {
  if (useRoute().query.token) {
    store.getToken();
    try {
      await axios.post("verification", {
        token: store.token,
      });
      loading.value = false;
      getVerified.value = true;
    } catch (error) {
      getVerified.value = false;
      loading.value = false;
      console.log(error);
    }
  }
});
</script>

<template>
  <router-link
    :to="{ name: 'landing' }"
    class="block sm:hidden absolute top-[4%] cursor-pointer py-2 pr-2"
  >
    <back-arrow-icon />
  </router-link>
  <loading-circle v-if="loading" />
  <div v-else>
    <div class="flex flex-col items-center justify-center py-16 gap-8">
      <div class="flex flex-col items-center gap-6">
        <message-sent />
        <h1 class="font-medium text-4xl text-white">
          {{
            getVerified
              ? $t("verification.thank_you")
              : $t("verification.failed")
          }}
        </h1>
      </div>
      <div v-if="getVerified">
        <p class="font-normal text-base text-white">
          {{ $t("verification.account_activated") }}
        </p>
      </div>
      <base-button
        :orange="true"
        class="w-full text-white"
        @click="handleAutoLogin"
        v-if="getVerified"
      >
        {{ $t("verification.go_to_news_feed") }}
      </base-button>
    </div>
  </div>
</template>
