<script setup>
import MenuButton from "@/components/icons/quotes/MenuButtonIcon.vue";
import EditIcon from "@/components/icons/movies/EditIcon.vue";
import DeleteIcon from "@/components/icons/movies/DeleteIcon.vue";
import EyeIcon from "@/components/icons/movies/EyeIcon.vue";
import { ref } from "vue";

defineEmits(["close"]);
defineProps({
  id: {
    type: Number,
    required: true,
  },
});
const show = ref(false);
</script>

<template>
  <div
    class="fixed w-screen h-screen top-0 left-0 z-40"
    v-if="show"
    @click="show = false"
  ></div>
  <div
    class="absolute cursor-pointer right-0 bottom-0 lg:bottom-auto lg:top-0 p-2"
    @click="show = !show"
  >
    <menu-button class="relative" />
    <div
      v-if="show"
      class="absolute bottom-5 right-0 md:right-auto lg:bottom-auto lg:top-5 flex flex-col gap-8 px-10 z-40 py-8 w-[12rem] rounded-[0.6rem] bg-[#24222F]"
    >
      <router-link
        @click="show = false"
        class="flex flex-row gap-3 items-center w-full hover:text-[#8b86a5]"
        :to="{ name: 'view-quote', query: { quoteId: id } }"
      >
        <eye-icon cls="hover:fill-[#8b86a5]" /> view</router-link
      >
      <router-link
        @click="show = false"
        class="flex flex-row gap-3 items-center hover:text-[#8b86a5]"
        :to="{
          name: 'edit-quote',
          params: {
            quoteId: id,
          },
        }"
        ><edit-icon cls="hover:fill-[#8b86a5]" />edit
      </router-link>
      <router-link
        @click="show = false"
        class="flex flex-row gap-3 items-center hover:text-[#8b86a5]"
        :to="{
          name: 'delete-quote',
          params: {
            quoteId: id,
          },
        }"
        ><delete-icon cls="hover:fill-[#8b86a5]" /> delete</router-link
      >
    </div>
  </div>
</template>
