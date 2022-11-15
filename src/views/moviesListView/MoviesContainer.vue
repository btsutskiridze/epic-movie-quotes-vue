<script setup>
import PlusIcon from "@/components/icons/movies/PlusIcon.vue";
import BaseSearch from "@/components/UI/form/BaseSearch.vue";
import BaseMovieItem from "@/components/UI/Movies/BaseMovieItem.vue";
</script>

<template>
  <div class="container py-6 px-[7%] md:px-5 flex flex-col gap-6 mx-auto">
    <base-search class="flex md:hidden" />
    <section
      class="flex xs:flex-col flex-row justify-between items-center w-full gap-3"
    >
      <div>
        <h1 class="whitespace-nowrap">My list of movies (Total 4)</h1>
      </div>
      <div
        class="flex flex-col-reverse md:flex-row justify-start gap-4 xs:w-full"
      >
        <base-search class="hidden md:flex" />
        <base-button
          @click="$router.push({ name: 'add-movie' })"
          class="flex flex-row items-center gap-3 bg-red-600 whitespace-nowrap"
          ><plus-icon /> Add movie</base-button
        >
      </div>
    </section>

    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <base-movie-item
        name="samurai champloo"
        date="2000"
        quotes-number="6"
        path="src/assets/images/movies/samurai-champloo.jpg"
      />
      <base-movie-item
        name="samurai champloo"
        date="2000"
        quotes-number="6"
        path="src/assets/images/movies/samurai-champloo.jpg"
      />
      <base-movie-item
        name="samurae champloo"
        date="2000"
        quotes-number="4"
        path="src/assets/images/movies/samurai-champloo.jpg"
      />
      <base-movie-item
        name="samurai champloo"
        date="2000"
        quotes-number="6"
        path="src/assets/images/movies/samurai-champloo.jpg"
      />
      <base-movie-item
        name="samurai champloo"
        date="2000"
        quotes-number="6"
        path="src/assets/images/movies/samurai-champloo.jpg"
      />
    </div>
  </div>
</template>
