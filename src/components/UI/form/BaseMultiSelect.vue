<script setup>
import RemoveIcon from "@/components/icons/dialog/RemoveIcon.vue";
import genresJson from "@/config/genres/genres.json";
import { Field } from "vee-validate";
import { onMounted, ref } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  values: {
    type: Array,
    required: false,
  },
});

const chips = ref([]);
const open = ref(false);
const genres = ref([]);
const wasTouched = ref(false);

onMounted(() => {
  if (props.values) {
    props.values.forEach((chip) => {
      chips.value.push(chip);
      document.getElementById(chip).classList.add("bg-gray-800");
    });
  }
});

const movieGenres = genresJson;
const saveChip = (e) => {
  if (!wasTouched.value) wasTouched.value = true;
  if (!chips.value.includes(e.target.id)) {
    e.target.classList.add("bg-gray-800");
    chips.value.push(e.target.id);
    genres.value = chips.value;
  }
};
const removeChip = (index) => {
  if (!wasTouched.value) wasTouched.value = true;
  document
    .getElementById(chips.value[index].trim())
    .classList.remove("bg-gray-800");
  chips.value.splice(index, 1);
  genres.value = chips.value;
};

const toggleGenres = (e) => {
  if (!e.target.classList.contains("chip-remove")) {
    open.value = !open.value;
  }
};

const rule = () => {
  if (chips.value.length === 0) {
    return false;
  } else {
    return true;
  }
};
</script>

<template>
  <div
    class="fixed top-0 left-0 z-20 h-screen w-screen"
    v-if="open"
    @click="open = false"
  ></div>
  <div class="z-[50]">
    <Field v-slot="{ field, meta }" :name="name" :rules="rule" v-model="chips">
      <div
        @click="toggleGenres"
        class="flex w-full cursor-pointer flex-wrap content-between gap-y-2 rounded-[0.25rem] border border-[#6C757D] py-2 pr-12 text-base"
        :class="[
          !meta.valid && wasTouched ? 'border-[#DC3545]' : '',
          meta.valid && wasTouched ? 'border-[#198754]' : '',
          meta.validated && meta.touched && chips.length
            ? 'border-[#198754]'
            : '',
          meta.validated && meta.touched && !chips.length
            ? 'border-[#DC3545]'
            : '',
        ]"
      >
        <div
          class="ml-2 flex w-max items-center rounded-sm bg-gray-600 pl-2"
          v-for="(chip, i) of chips"
          :key="chip.label"
        >
          <span class="cursor-default"> {{ $t("genres." + chip) }} </span>
          <span @click="removeChip(i)" class="chip-remove cursor-pointer p-2">
            <remove-icon />
          </span>
        </div>
        <input
          v-bind="field"
          :id="name"
          class="w-16 cursor-pointer bg-transparent px-2 placeholder-[#6C757D]"
          :class="chips.length !== 0 ? 'invisible ' : ''"
          :placeholder="chips.length === 0 ? 'Genre' : ''"
          autocomplete="off"
          disabled
        />
      </div>
    </Field>
    <ul
      class="mt-2 flex max-h-[8.5rem] w-full flex-col overflow-y-auto rounded-lg bg-black py-1"
      v-show="open"
    >
      <li
        :id="item"
        class="cursor-pointer py-1 px-3 hover:bg-slate-900"
        v-for="item in movieGenres"
        :key="item.label"
        @click="saveChip"
      >
        {{ $t("genres." + item) }}
      </li>
    </ul>
  </div>
</template>
