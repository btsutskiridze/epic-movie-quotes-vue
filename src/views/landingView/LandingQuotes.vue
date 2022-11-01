<script setup>
import BaseBackgroundImg from "@/components/UI/landing-page/BaseBackgroundImg.vue";
</script>

<template>
  <base-background-img
    url="bg-[url('@/assets/images/landing-page/interstellar.png')]"
    position="bottom"
    :first="true"
    :fixed="false"
  >
    <template #quote> “{{ $t("quotes.n1.text") }}” </template>
    <template #movieName>{{ $t("quotes.n1.movie") }}</template>
  </base-background-img>

  <base-background-img
    url="bg-[url('@/assets/images/landing-page/the-royal-tenenbaums.png')]"
    position="center"
  >
    <template #quote> “{{ $t("quotes.n2.text") }}” </template>
    <template #movieName> {{ $t("quotes.n2.movie") }}</template>
  </base-background-img>

  <base-background-img
    url="bg-[url('@/assets/images/landing-page/lord-of-rings.jpg')]"
    position="top"
  >
    <template #quote> “{{ $t("quotes.n3.text") }}” </template>
    <template #movieName> {{ $t("quotes.n3.movie") }} </template>
  </base-background-img>
</template>
