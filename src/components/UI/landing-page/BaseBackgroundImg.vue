<script setup>
defineProps({
  url: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  fixed: {
    type: Boolean,
    required: false,
    default: true,
  },
  first: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<template>
  <div
    class="h-96 bg-cover bg-no-repeat md:h-screen"
    :class="[fixed ? 'md:bg-fixed' : '', url, `bg-center md:bg-${position}`]"
  >
    <div
      class="font-montserrat flex h-full flex-row items-center justify-center font-bold text-white"
      :class="first ? 'bg-linear-top-left' : ' media-bg-linear-top-left'"
    >
      <div class="relative -top-5 mx-auto w-[72%] md:-top-20 md:w-[70%]">
        <div>
          <article
            class="relative whitespace-pre-wrap text-xl leading-normal md:text-[3.1rem]"
          >
            <slot name="quote"></slot>
            <div
              class="absolute top-4 -left-6 h-[0.125rem] w-4 bg-white md:top-10 md:left-[-4.2rem] md:w-14"
            ></div>
          </article>

          <p class="mt-4 text-base md:text-3xl">
            <slot name="movieName"></slot>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
