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
    class="bg-no-repeat h-96 bg-cover md:h-screen"
    :class="[fixed ? 'md:bg-fixed' : '', url, `bg-center md:bg-${position}`]"
  >
    <div
      class="h-full flex justify-center flex-row items-center text-white font-montserrat font-bold"
      :class="[first ? 'bg-linear-top-left' : ' media-bg-linear-top-left']"
    >
      <div class="w-[72%] md:w-[70%] -top-5 md:-top-20 relative mx-auto">
        <div>
          <article
            class="text-xl md:text-[3.1rem] relative leading-normal whitespace-pre-wrap"
          >
            <slot name="quote"></slot>
            <div
              class="h-[2px] bg-white w-4 md:w-14 absolute top-4 md:top-10 -left-6 md:left-[-4.2rem]"
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
