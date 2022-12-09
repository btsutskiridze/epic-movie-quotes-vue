<script setup></script>

<template>
  <div class="relative z-20">
    <div class="flex h-[60vh] flex-col items-center justify-center gap-6">
      <h1
        class="w- whitespace-pre-wrap text-center text-2xl font-bold leading-normal lg:text-[4.3rem]"
      >
        {{ $t("landingView.welcome_msg") }}
      </h1>
      <router-link :to="{ name: 'registration' }">
        <base-button :orange="true" class="text-white lg:text-2xl">
          {{ $t("landingView.get_started") }}
        </base-button>
      </router-link>
    </div>
  </div>
</template>
