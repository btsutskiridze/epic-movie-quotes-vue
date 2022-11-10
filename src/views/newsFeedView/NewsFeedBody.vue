<script setup>
import MoviesIcon from "@/components/icons/news-feed/MoviesIcon.vue";
import HomeIcon from "@/components/icons/news-feed/HomeIcon.vue";
import SearchIcon from "@/components/icons/news-feed/SearchIcon.vue";
import EditIcon from "@/components/icons/news-feed/EditIcon.vue";
import { ref } from "vue";

const searchInput = ref(null);
</script>

<template>
  <div class="h-[80vh] w-full flex justify-start items-start text-white py-8">
    <div class="w-[30%] hidden md:block">
      <div class="flex flex-col gap-8 text-xl">
        <div class="flex flex-row items-center gap-4">
          <img
            src="@/assets/images/news-feed/avatar.png"
            alt="avatar"
            class="w-10 h-10"
          />
          <div>
            <h1>Brad piti</h1>
            <p class="text-gray-400 text-base">Edit your profile</p>
          </div>
        </div>
        <div class="flex flex-row gap-3 cursor-pointer">
          <home-icon />
          <h1>News Feed</h1>
        </div>
        <div class="flex flex-row gap-3 cursor-pointer">
          <movies-icon />
          <h1>List of Movies</h1>
        </div>
      </div>
    </div>
    <div class="w-full md:w-[64%] lg:w-[50%]">
      <div class="flex-row items-center hidden md:flex gap-4">
        <button
          class="bg-[#1F1D2A] p-3 rounded-[10px] flex flex-row justify-between whitespace-nowrap"
        >
          <edit-icon class="mr-3" />
          Write new Quote
        </button>
        <div
          class="w-3/4 flex flex-row items-center relative overflow-x-hidden"
        >
          <search-icon class="absolute w-4 h-4" />
          <span
            v-if="!searchInput"
            class="text-[#97969A] absolute left-6 whitespace-nowrap"
            >Enter <span class="text-white">@</span> to search movies, Enter
            <span class="text-white">#</span> to search quotes</span
          >
          <input
            v-model="searchInput"
            type="search"
            name="search"
            id="search"
            autocomplete="off"
            class="z-20 bg-transparent text-base leading-[150%] focus:outline-none hover:outline-none placeholder-white border-b border-[#efefef4d] py-2 pl-6 w-full"
            placeholder=""
          />
        </div>
      </div>
      <!-- <h1 class="text-2xl">News feed</h1> -->
    </div>
    <div class="w-[30%] hidden lg:block"></div>
  </div>
</template>
