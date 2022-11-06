<script setup>
import router from "@/router/index.js";
import { deleteJwtToken } from "@/helpers/jwt";
const handleLogout = () => {
  deleteJwtToken("jwt_token", "/", import.meta.VITE_DOMAIN);
  router.push("/");
};
</script>

<template>
  <div>
    <h1>news feed</h1>
    <h1 @click="handleLogout">LOG OUT</h1>
  </div>
</template>
