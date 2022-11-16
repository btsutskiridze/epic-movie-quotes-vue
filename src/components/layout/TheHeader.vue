<script setup>
import LanguageDropdown from "@/components/layout/LanguageDropdown.vue";
</script>

<template>
  <header class="w-4/5 m-auto">
    <div class="flex justify-between items-center py-6 text-base">
      <h2 class="font-bold uppercase">{{ $t("landingView.movie_quotes") }}</h2>
      <div class="flex justify-center items-center gap-4">
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
