<script setup>
const autoResize = (e) => {
  e.target.style.height = "auto";
  e.target.style.height = e.target.scrollHeight + "px";
};
</script>

<template>
  <div class="flex flex-row gap-3 items-start">
    <img
      src="@/assets/images/news-feed/avatar.png"
      alt="avatar"
      class="w-10 h-10"
    />
    <div class="w-full">
      <textarea
        rows="1"
        cols="50"
        name="comment"
        id="comment"
        autocomplete="off"
        @input="autoResize"
        class="bg-[#24222F] overflow-y-hidden resize-none px-4 py-3 leading-5 rounded-xl text-base focus:outline-none hover:outline-none placeholder-white w-full"
        :placeholder="$t('newsFeed.write_a_comment')"
      />
    </div>
  </div>
</template>
