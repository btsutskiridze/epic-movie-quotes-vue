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
        <h1 class="whitespace-nowrap">
          {{ $t("movies.my_list_of_movies") }}
          ({{ $t("movies.total") }} 5)
        </h1>
      </div>
      <div
        class="flex flex-col-reverse md:flex-row justify-start gap-4 xs:w-full"
      >
        <base-search class="hidden md:flex" />
        <router-link :to="{ name: 'add-movie' }">
          <base-button
            class="flex flex-row items-center gap-3 bg-red-600 whitespace-nowrap"
          >
            <plus-icon /> {{ $t("movies.add_movie") }}
          </base-button>
        </router-link>
      </div>
    </section>

    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <base-movie-item
        name="samurai champloo"
        date="2000"
        quotes-number="6"
        image="samurai-champloo.jpg"
      />
      <base-movie-item
        name="samurai champloo"
        date="2000"
        quotes-number="6"
        image="samurai-champloo.jpg"
      />
      <base-movie-item
        name="samurae champloo"
        date="2000"
        quotes-number="4"
        image="samurai-champloo.jpg"
      />
      <base-movie-item
        name="samurai champloo"
        date="2000"
        quotes-number="6"
        image="samurai-champloo.jpg"
      />
      <base-movie-item
        name="samurai champloo"
        date="2000"
        quotes-number="6"
        image="samurai-champloo.jpg"
      />
    </div>
  </div>
</template>
