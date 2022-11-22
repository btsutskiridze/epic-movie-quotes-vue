<script setup></script>

<template>
  <div class="flex felx-row">
    <img
      class="w-60 h-36"
      src="@/assets/images/movies/samurai-champloo.jpg"
      alt="quote"
    />
    <h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, temporibus.
    </h1>
    <router-link :to="{ name: 'quote' }">view</router-link>
    <router-link :to="{ name: 'edit-quote' }">edit</router-link>
    <router-link :to="{ name: 'delete-quote' }">delete</router-link>
  </div>
</template>
