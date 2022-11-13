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
    class="h-screen w-screen fixed top-0 left-0 z-30 flex justify-center items-center"
  ></div>

  <ul id="dropdown" class="relative text-center hidden md:block z-30">
    <li
      class="gap-3 cursor-pointer relative flex flex-row justify-between items-center"
      @click="toggleMenu"
    >
      {{ activeLang }}
      <DropdownArrowIcon />
    </li>
    <li
      v-if="show"
      @click="toggleMenu(), setTextLocale(locale)"
      class="pl-2 pr-1 py-1 -left-2 gap-3 top-8 absolute cursor-pointer flex flex-row justify-between mr-2 items-center bg-[#2a263d] rounded-xl hover:bg-[#322b57] active:bg-[#473f6e]"
    >
      {{ inactiveLang }}
      <DropdownArrowIcon class="invisible" />
    </li>
  </ul>
</template>
