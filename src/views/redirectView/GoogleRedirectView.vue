<template><div></div></template>

<script setup>
import { onBeforeMount } from "vue";
import { setJwtToken } from "@/helpers/jwt/index.js";
import { useRoute } from "vue-router";
import router from "@/router";

onBeforeMount(() => {
  setJwtToken(useRoute().query.jwt_token, useRoute().query.expires_in);
  window.location.reload();
  router.replace({ name: "news-feed" });
});
</script>
