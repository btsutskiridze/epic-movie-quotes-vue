<script setup>
import DropdownArrowIcon from "@/components/icons/DropdownArrowIcon.vue";
import { ref, computed, onMounted } from "vue";
import i18n from "@/i18n.js";
import { setLocale } from "@vee-validate/i18n";

onMounted(() => {
  if (localStorage.locale) {
    i18n.global.locale = localStorage.locale;
    setLocale(localStorage.locale);
  }
});

let show = ref(false);

const activeLang = computed(() => {
  return i18n.global.locale === "en" ? "Eng" : "ქარ";
});

const inactiveLang = computed(() =>
  i18n.global.locale === "en" ? "Geo" : "ინგ"
);

let locale = computed(() => (i18n.global.locale === "en" ? "ka" : "en"));

const toggleMenu = () => {
  show.value = !show.value;
};

const setTextLocale = (val) => {
  i18n.global.locale = val;
  setLocale(val);

  localStorage.setItem("locale", val);
};
const closeDialog = (e) => {
  if (document.getElementById("container") === e.target) {
    show.value = false;
  }
};
</script>

<template>
  <div
    v-if="show"
    @click="closeDialog"
    id="container"
    class="fixed top-0 left-0 z-[25] flex h-screen w-screen items-center justify-center"
  ></div>

  <ul id="dropdown" class="relative z-[25] text-center">
    <li
      class="relative flex cursor-pointer flex-row items-center justify-between gap-3"
      @click="toggleMenu"
    >
      {{ activeLang }}
      <DropdownArrowIcon />
    </li>
    <li
      v-if="show"
      @click="toggleMenu(), setTextLocale(locale)"
      class="absolute -left-2 top-8 mr-2 flex cursor-pointer flex-row items-center justify-between gap-3 rounded-xl bg-[#2a263d] py-1 pl-2 pr-1 hover:bg-[#322b57] active:bg-[#473f6e]"
    >
      {{ inactiveLang }}
      <DropdownArrowIcon class="invisible" />
    </li>
  </ul>
</template>
