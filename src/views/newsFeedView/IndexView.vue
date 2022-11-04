<script setup>
import router from "@/router/index.js";
import { deleteJwtToken } from "@/helpers/jwt";
const handleLogout = () => {
  deleteJwtToken("jwt_token", "/", import.meta.DOMAIN);
  router.push("/");
};
</script>

<template>
  <div>
    <h1>this is newsFeed nigga</h1>
    <h2>shut up nigga</h2>
    <h1 class="text-2xl cursor-pointer" @click="handleLogout">Log out</h1>
  </div>
</template>
