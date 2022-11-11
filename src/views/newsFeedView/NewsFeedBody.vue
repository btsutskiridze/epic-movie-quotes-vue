<script setup>
import MoviesIcon from "@/components/icons/news-feed/MoviesIcon.vue";
import HomeIcon from "@/components/icons/news-feed/HomeIcon.vue";
import SearchIcon from "@/components/icons/news-feed/SearchIcon.vue";
import EditIcon from "@/components/icons/news-feed/EditIcon.vue";
import CommentIcon from "@/components/icons/news-feed/CommentIcon.vue";
import LikeIcon from "@/components/icons/news-feed/LikeIcon.vue";
import { ref } from "vue";

const searchInput = ref(null);

function autoResize(e) {
  e.target.style.height = "auto";
  e.target.style.height = e.target.scrollHeight + "px";
}
</script>

<template>
  <div class="w-full flex justify-start items-start text-white md:py-8">
    <div class="w-[30%] hidden md:block sticky top-10">
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
    <div class="w-full md:w-[64%] lg:w-[50%] flex flex-col md:gap-4 pb-4">
      <div class="flex-row items-center hidden md:flex gap-4">
        <button
          class="bg-[#1F1D2A] p-3 rounded-[10px] flex flex-row justify-between whitespace-nowrap"
        >
          <edit-icon class="mr-3" />
          Write new Quote
        </button>
        <div class="w-3/4">
          <div
            class="hidden md:flex flex-row items-center relative overflow-x-hidden"
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
      </div>
      <div class="block md:hidden">
        <button
          class="bg-[#181624] py-6 px-[7%] w-full left-0 flex flex-row whitespace-nowrap"
        >
          <edit-icon class="mr-3" />
          Write new Quote
        </button>
      </div>

      <div id="posts" class="flex flex-col gap-8">
        <div class="w-full bg-[#11101A] rounded-xl py-6 px-[7%] md:px-5">
          <div class="flex flex-col gap-4">
            <div id="user" class="flex flex-row items-center gap-4">
              <img
                src="@/assets/images/news-feed/avatar.png"
                alt="avatar"
                class="w-10 h-10"
              />
              <h1>Nino Chkheidze</h1>
            </div>
            <div class="">
              <span>“Follow your dream.”</span>
              <span>movie- Billy Elliot.</span>
              <span> (2000)</span>
            </div>
            <div>
              <img
                src="@/assets/images/news-feed/post-image.png"
                alt="post-image"
                class="w-full"
              />
            </div>
            <div class="flex flex-row gap-6 border-b border-[#efefef4d] pb-1">
              <div class="flex flex-row gap-2 items-center">
                <span class="md:text-xl">3</span>
                <comment-icon class="w-[60%] h-[60%]" />
              </div>
              <div class="flex flex-row gap-2 items-center">
                <span class="md:text-xl">10</span>
                <like-icon class="w-[60%] h-[60%]" />
              </div>
            </div>
            <div id="comments" class="flex flex-col gap-6">
              <div class="flex flex-row gap-3">
                <img
                  src="@/assets/images/news-feed/avatar.png"
                  alt="avatar"
                  class="w-10 h-10"
                />
                <div class="border-b border-[#efefef4d] pb-2 w-full">
                  <h1>Johnny Depp</h1>
                  <p class="text-gray-400">Nino Shen cekvav?</p>
                </div>
              </div>
              <div class="flex flex-row gap-3">
                <img
                  src="@/assets/images/news-feed/avatar.png"
                  alt="avatar"
                  class="w-10 h-10"
                />
                <div class="border-b border-[#efefef4d] pb-2 w-full">
                  <h1>Lela tsurtsumia</h1>
                  <p class="text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Impedit aspernatur eum in harum unde corporis expedita id
                    facilis modi maxime. Ab, distinctio! Excepturi provident
                    error unde alias, laboriosam ab quo accusantium et, placeat
                    veritatis nobis blanditiis animi facilis veniam quos!
                  </p>
                </div>
              </div>
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
                    placeholder="Write a comment"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full bg-[#11101A] rounded-xl py-6 px-[7%] md:px-5">
          <div class="flex flex-col gap-4">
            <div id="user" class="flex flex-row items-center gap-4">
              <img
                src="@/assets/images/news-feed/avatar.png"
                alt="avatar"
                class="w-10 h-10"
              />
              <h1>Nino Chkheidze</h1>
            </div>
            <div class="">
              <span>“Follow your dream.”</span>
              <span>movie- Billy Elliot.</span>
              <span> (2000)</span>
            </div>
            <div>
              <img
                src="@/assets/images/news-feed/post-image.png"
                alt="post-image"
                class="w-full"
              />
            </div>
            <div class="flex flex-row gap-6 border-b border-[#efefef4d] pb-1">
              <div class="flex flex-row gap-2 items-center">
                <span class="md:text-xl">3</span>
                <comment-icon class="w-[60%] h-[60%]" />
              </div>
              <div class="flex flex-row gap-2 items-center">
                <span class="md:text-xl">10</span>
                <like-icon class="w-[60%] h-[60%]" />
              </div>
            </div>
            <div id="comments" class="flex flex-col gap-6">
              <div class="flex flex-row gap-3">
                <img
                  src="@/assets/images/news-feed/avatar.png"
                  alt="avatar"
                  class="w-10 h-10"
                />
                <div class="border-b border-[#efefef4d] pb-2 w-full">
                  <h1>Johnny Depp</h1>
                  <p class="text-gray-400">Nino Shen cekvav?</p>
                </div>
              </div>
              <div class="flex flex-row gap-3">
                <img
                  src="@/assets/images/news-feed/avatar.png"
                  alt="avatar"
                  class="w-10 h-10"
                />
                <div class="border-b border-[#efefef4d] pb-2 w-full">
                  <h1>Lela tsurtsumia</h1>
                  <p class="text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Impedit aspernatur eum in harum unde corporis expedita id
                    facilis modi maxime. Ab, distinctio! Excepturi provident
                    error unde alias, laboriosam ab quo accusantium et, placeat
                    veritatis nobis blanditiis animi facilis veniam quos!
                  </p>
                </div>
              </div>

              <div class="flex flex-row gap-3 items-center">
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
                    class="bg-[#24222F] px-4 py-2 rounded-xl text-base leading-[150%] focus:outline-none hover:outline-none placeholder-white w-full"
                    placeholder="comment"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
