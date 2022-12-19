<script setup>
import MenuButton from "@/components/icons/quotes/MenuButtonIcon.vue";
import EditIcon from "@/components/icons/movies/EditIcon.vue";
import DeleteIcon from "@/components/icons/movies/DeleteIcon.vue";
import EyeIcon from "@/components/icons/movies/EyeIcon.vue";
import { ref, watchEffect } from "vue";
// import { ClickAway } from "@/helpers/click-away";
defineEmits(["close"]);
defineProps({
  id: {
    type: Number,
    required: true,
  },
});

const show = ref(false);
const dropdown = ref(null);

const toggleDropdown = (e) => {
  if (!dropdown.value.contains(e.target) && dropdown.value !== e.target) {
    show.value = false;
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
  <!-- <div
    class="fixed top-0 left-0 z-40 h-screen w-screen"
    v-if="show"
    @click="show = false"
  ></div> -->
  <div class="absolute right-0 bottom-0 lg:bottom-auto lg:top-0">
    <div class="relative cursor-pointer p-2" @click="show = true">
      <menu-button />
    </div>
    <div
      v-if="show"
      ref="dropdown"
      class="absolute bottom-5 right-0 z-40 flex min-w-[12rem] flex-col gap-8 rounded-[0.6rem] bg-[#24222F] px-10 py-8 md:right-auto lg:bottom-auto lg:top-5"
    >
      <router-link
        @click="show = false"
        class="flex w-full flex-row items-center gap-3 hover:text-[#8b86a5]"
        :to="{ name: 'view-quote', query: { quoteId: id } }"
      >
        <eye-icon />
        {{ $t("quote.view") }}</router-link
      >
      <router-link
        @click="show = false"
        class="flex flex-row items-center gap-3 hover:text-[#8b86a5]"
        :to="{
          name: 'edit-quote',
          params: {
            quoteId: id,
          },
        }"
        ><edit-icon />{{ $t("quote.edit") }}
      </router-link>
      <router-link
        @click="show = false"
        class="flex flex-row items-center gap-3 hover:text-[#8b86a5]"
        :to="{
          name: 'delete-quote',
          params: {
            quoteId: id,
          },
        }"
        ><delete-icon /> {{ $t("quote.delete") }}</router-link
      >
    </div>
  </div>
</template>
