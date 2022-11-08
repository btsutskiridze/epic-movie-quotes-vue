<script setup>
import BaseButton from "@/components/UI/form/BaseButton.vue";
import MessageSent from "@/components/icons/MessageSentIcon.vue";
import BaseDialog from "@/components/UI/BaseDialog.vue";
import LoadingCircle from "@/components/LoadingCircle.vue";

import router from "@/router";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { setJwtToken } from "@/helpers/jwt/index.js";
import axios from "@/config/axios/index.js";

defineEmits(["close"]);
const props = defineProps({
  token: {
    type: String,
    required: false,
  },
});

const jwt = {
  token: null,
  expires_in: null,
};
const getVerified = ref(undefined);
const loading = ref(true);
const autoLogin = () => {
  setJwtToken(jwt.token, jwt.expires_in);
  router.replace({ name: "news-feed" });
};

onMounted(() => {
  if (props.token) {
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
  <base-dialog @close="$emit('close')">
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
          @click="autoLogin"
          v-if="getVerified"
        >
          {{ $t("verification.go_to_news_feed") }}
        </base-button>
      </div>
    </div>
  </base-dialog>
</template>
