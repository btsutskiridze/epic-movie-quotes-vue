<script setup>
import DropdownArrowIcon from "@/components/icons/DropdownArrowIcon.vue";
import { ref, computed, watchEffect } from "vue";
import i18n from "@/i18n.js";
import { setLocale } from "@vee-validate/i18n";

const show = ref(false);
const dropdown = ref(null);

const activeLang = computed(() => {
  return i18n.global.locale === "en" ? "Eng" : "ქარ";
});

const inactiveLang = computed(() =>
  i18n.global.locale === "en" ? "Geo" : "ინგ"
);

const locale = computed(() => (i18n.global.locale === "en" ? "ka" : "en"));

const setTextLocale = (val) => {
  i18n.global.locale = val;
  setLocale(val);

  localStorage.setItem("locale", val);
};

const toggleDropdown = (e) => {
  if (!dropdown.value.contains(e.target) && dropdown.value !== e.target) {
    show.value = false;
    console.log("click");
  }
};

watchEffect(() => {
  if (show.value) {
    setTimeout(() => {
      document.addEventListener("click", toggleDropdown);
    }, 1);
  } else {
    document.removeEventListener("click", toggleDropdown);
  }
});
</script>

<template>
  <ul ref="dropdown" class="relative z-[25] text-center">
    <li
      class="relative flex cursor-pointer flex-row items-center justify-between gap-3"
      @click="show = true"
    >
      {{ activeLang }}
      <DropdownArrowIcon />
    </li>
    <li
      v-if="show"
      @click="
        setTextLocale(locale);
        show = false;
      "
      class="absolute -left-2 top-8 mr-2 flex cursor-pointer flex-row items-center justify-between gap-3 rounded-xl bg-[#2a263d] py-1 pl-2 pr-1 hover:bg-[#322b57] active:bg-[#473f6e]"
    >
      {{ inactiveLang }}
      <DropdownArrowIcon class="invisible" />
    </li>
  </ul>
</template>
