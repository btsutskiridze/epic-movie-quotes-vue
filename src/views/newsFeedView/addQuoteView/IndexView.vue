<script setup>
import BaseFileInput from "@/components/UI/news-feed/form/BaseFileInput.vue";
import MoviesDropdown from "@/components/UI/news-feed/form/MoviesDropdown.vue";

const autoResize = (e) => {
  e.target.style.height = "auto";
  e.target.style.height = e.target.scrollHeight + "px";
};
</script>

<template>
  <news-feed-dialog @close="$router.push({ name: 'news-feed' })">
    <template #header>
      {{ $t("newsFeed.write_new_quote") }}
    </template>
    <section class="flex flex-col gap-4 text-white">
      <div id="user" class="flex flex-row items-center gap-4">
        <img
          src="@/assets/images/news-feed/avatar.png"
          alt="avatar"
          class="w-10 h-10"
        />
        <h1 class="">Brad spit</h1>
      </div>
      <div class="relative">
        <label for="quote_en" class="absolute right-4 top-2">Eng</label>
        <textarea
          rows="1"
          cols="50"
          name="quote_en"
          id="quote_en"
          autocomplete="off"
          @input="autoResize"
          class="relative bg-transparent resize-none overflow-y-hidden border rounded-[4px] border-[#6C757D] pl-2 pr-12 py-2 text-base focus:outline-none hover:outline-none placeholder-[#6C757D] w-full"
          placeholder="Start create new quote"
        />
      </div>
      <div class="relative">
        <label for="quote_ka" class="absolute right-4 top-2">ქარ</label>
        <textarea
          rows="1"
          cols="50"
          name="quote_ka"
          id="quote_ka"
          autocomplete="off"
          @input="autoResize"
          class="relative bg-transparent resize-none overflow-y-hidden border rounded-[4px] border-[#6C757D] pl-2 pr-12 py-2 text-base focus:outline-none hover:outline-none placeholder-[#6C757D] w-full"
          placeholder="Start create new quote"
        />
      </div>
      <base-file-input />
      <movies-dropdown />
      <base-button class="w-full bg-[#E31221]">Post</base-button>
    </section>
  </news-feed-dialog>
</template>

<style scoped>
::-webkit-input-placeholder {
  font-style: italic;
}
:-moz-placeholder {
  font-style: italic;
}
::-moz-placeholder {
  font-style: italic;
}
:-ms-input-placeholder {
  font-style: italic;
}
</style>
