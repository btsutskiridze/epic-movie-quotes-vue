<script setup></script>

<template>
  <router-view />
</template>

<style>
html {
  overflow-y: scroll;
  overflow-y: overlay;
}

::-webkit-scrollbar {
  width: 2px;
  height: 10px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(90, 90, 90);
}
</style>
