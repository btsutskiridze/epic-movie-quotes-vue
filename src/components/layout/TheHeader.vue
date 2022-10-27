<script setup>
import DropdownArrowIcon from "@/components/icons/DropdownArrowIcon.vue";
import BaseButton from "@/components/UI/BaseButton.vue";
</script>

<template>
  <header class="w-4/5 m-auto">
    <div class="flex justify-between items-center py-6 text-base">
      <h2 class="uppercase">movie quotes</h2>
      <div class="flex justify-center items-center gap-4">
        <ul class="w-24 text-center hidden md:block">
          <li class="gap-3 flex flex-row justify-center items-center">
            Eng <DropdownArrowIcon />
          </li>
          <li v-if="false">ka</li>
        </ul>
        <base-button :orange="true" class="hidden md:block">
          Sign Up
        </base-button>
        <base-button :outline="true"> Log In </base-button>
      </div>
    </div>
  </header>
</template>
