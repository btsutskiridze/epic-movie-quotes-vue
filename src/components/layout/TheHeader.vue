<script setup>
import LanguageDropdown from "@/components/layout/LanguageDropdown.vue";
</script>

<template>
  <header class="m-auto w-4/5">
    <div class="flex items-center justify-between py-6 text-base">
      <h2 class="font-bold uppercase">{{ $t("landingView.movie_quotes") }}</h2>
      <div class="flex items-center justify-center gap-4 text-white">
        <language-dropdown />
        <router-link :to="{ name: 'registration' }">
          <base-button :orange="true" class="hidden md:block">
            {{ $t("landingView.sign_up") }}
          </base-button>
        </router-link>
        <router-link :to="{ name: 'login' }">
          <base-button :outline="true"
            >{{ $t("landingView.log_in") }}
          </base-button>
        </router-link>
      </div>
    </div>
  </header>
</template>
