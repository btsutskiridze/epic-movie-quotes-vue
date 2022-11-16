<script setup>
import MessageSent from "@/components/icons/MessageSentIcon.vue";
import BackArrowIcon from "@/components/icons/BackArrowIcon.vue";

import router from "@/router";
import { onBeforeMount, ref } from "vue";
import { setJwtToken } from "@/helpers/jwt/index.js";
import axios from "@/config/axios/index.js";
import { useRoute } from "vue-router";
const getVerified = ref(undefined);
const loading = ref(true);

const handleAutoLogin = () => {
  setJwtToken(jwt.token, jwt.expires_in);
  router.replace({ name: "news-feed" });
};

const jwt = {
  token: "",
  expires_in: "",
};

onBeforeMount(() => {
  if (useRoute().query.token) {
    axios
      .post("verification", {
        token: useRoute().query.token,
      })
      .then((response) => {
        loading.value = false;
        getVerified.value = true;
        jwt.token = response.data.access_token;
        jwt.expires_in = response.data.expires_in;
      })
      .catch((error) => {
        getVerified.value = false;
        loading.value = false;
        console.log(error.response);
      });
  }
});
</script>

<template>
  <router-link
    :to="{ name: 'home' }"
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
