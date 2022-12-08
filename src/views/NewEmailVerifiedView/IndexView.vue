<script setup>
import MessageSent from "@/components/icons/MessageSentIcon.vue";
import { useUserStore } from "@/stores/useUserStore";

import { onBeforeMount, ref } from "vue";
import axios from "@/config/axios/index.js";
import { useRoute } from "vue-router";
import router from "@/router";
const getVerified = ref(undefined);
const loading = ref(true);

onBeforeMount(async () => {
  if (useRoute().query.token) {
    try {
      await axios.post("email/verification", {
        token: useRoute().query.token,
      });
      useUserStore().getUser();
      loading.value = false;
      getVerified.value = true;
    } catch (error) {
      getVerified.value = false;
      loading.value = false;
      console.log(error);
    }
  } else {
    router.push({ name: "user-profile" });
  }
});
</script>

<template>
  <div class="h-screen w-screen bg-[#1c173b]">
    <news-feed-dialog @close="$router.push({ name: 'user-profile' })" top="">
      <loading-circle v-if="loading" />
      <div v-else>
        <div class="flex flex-col items-center justify-center gap-8 py-2">
          <div class="flex flex-col items-center gap-6">
            <message-sent />
            <h1 class="text-4xl font-medium text-white">
              {{
                getVerified
                  ? $t("verification.thank_you")
                  : $t("verification.failed")
              }}
            </h1>
          </div>
          <div v-if="getVerified">
            <p class="text-base font-normal text-white">
              New email is now verified
            </p>
          </div>
          <base-button
            :orange="true"
            class="w-full text-white"
            @click="$router.push({ name: 'user-profile' })"
            v-if="getVerified"
          >
            Go back
          </base-button>
        </div>
      </div>
    </news-feed-dialog>
  </div>
</template>
