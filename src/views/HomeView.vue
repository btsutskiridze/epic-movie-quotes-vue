<script setup>
import TheHeader from "@/components/layout/TheHeader.vue";
import TheFooter from "@/components/layout/TheFooter.vue";
import BaseButton from "@/components/UI/BaseButton.vue";
import BaseBackgroundImg from "@/components/UI/landing-page/BaseBackgroundImg.vue";
</script>

<template>
  <div class="bg-[#11101A] text-[#DDCCAA] font-helvetica">
    <div class="relative z-40">
      <the-header />
      <div class="flex justify-center items-center gap-6 flex-col h-[60vh]">
        <h1
          class="w- text-2xl lg:text-[4.3rem] text-center font-bold leading-normal whitespace-pre-wrap"
        >
          {{ $t("landingView.welcome_msg") }}
        </h1>
        <base-button :orange="true" class="lg:text-2xl">
          {{ $t("landingView.get_started") }}</base-button
        >
      </div>
    </div>
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
    <the-footer />
  </div>
</template>
