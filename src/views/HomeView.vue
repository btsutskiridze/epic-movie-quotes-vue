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
          class="text-2xl md:text-[4.3rem] text-center font-bold leading-normal"
        >
          Find any quote in <br />millions of movie lines
        </h1>
        <base-button :orange="true" class="md:text-xl">
          Get started
        </base-button>
      </div>
    </div>
    <base-background-img
      url="bg-[url('@/assets/images/landing-page/interstellar.png')]"
      position="bottom"
      :first="true"
      :fixed="false"
    >
      <template #quote>
        “You have to leave somethig <br />
        behind to go forward”
      </template>
      <template #movieName>Interstellar, 2014</template>
    </base-background-img>

    <base-background-img
      url="bg-[url('@/assets/images/landing-page/the-royal-tenenbaums.png')]"
      position="center"
    >
      <template #quote>
        I think we're just gonna have <br />
        to be secretly in love with earch other <br />
        and leave it that
      </template>
      <template #movieName> The Royal Tenenbaums,2001 </template>
    </base-background-img>

    <base-background-img
      url="bg-[url('@/assets/images/landing-page/lord-of-rings.jpg')]"
      position="top"
    >
      <template #quote>
        All we have to decide is what to do <br />
        with the time that is given to us.
      </template>
      <template #movieName> The Lord of the Rings, 2001 </template>
    </base-background-img>
    <the-footer />
  </div>
</template>
