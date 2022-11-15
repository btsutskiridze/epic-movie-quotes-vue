<script setup>
import BaseFileInput from "@/components/UI/news-feed/form/BaseFileInput.vue";
import BaseTextarea from "@/components/UI/form/BaseTextarea.vue";
</script>

<template>
  <news-feed-dialog @close="$router.push({ name: 'movies-list' })">
    <template #header>
      {{ $t("newsFeed.write_new_movie") }}
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
      <base-textarea name="movie_name_en" placeholder="Movie name" lang="Eng" />
      <base-textarea
        name="movie_name_ka"
        placeholder="ფილმის სახელი"
        lang="ქარ"
      />
      <base-textarea name="director_en" placeholder="Director" lang="Eng" />
      <base-textarea name="director_ka" placeholder="რეჟისორი" lang="ქარ" />
      <base-textarea
        name="description_en"
        placeholder="Movie description"
        lang="Eng"
      />
      <base-textarea
        name="description_ka"
        placeholder="ფილმის აღწერა"
        lang="ქარ"
      />
      <base-file-input />
      <base-button class="w-full bg-[#E31221]">Add movie</base-button>
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
