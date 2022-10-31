<script setup>
import BaseDialog from "@/components/UI/BaseDialog.vue";
defineEmits(["close"]);
</script>

<template>
  <div>
    <base-dialog @close="$emit('close')"> </base-dialog>
  </div>
</template>
