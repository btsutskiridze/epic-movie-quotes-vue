<script setup>
import { Field } from "vee-validate";
import { onMounted, ref } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: false,
  },
  lang: {
    type: String,
    required: false,
  },
  rules: {
    type: String,
    required: false,
  },
  model: {
    type: String,
    required: false,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
});
const value = ref(props.model);

const autoResize = (e) => {
  e.target.style.height = "auto";
  e.target.style.height = e.target.scrollHeight + "px";
};

onMounted(() => {
  document.getElementById(props.name).style.height =
    document.getElementById(props.name).scrollHeight + "px";
  document.getElementById(props.name).disabled = props.disabled;
});
</script>

<template>
  <div class="relative">
    <label :for="name" class="absolute right-4 top-2">{{ lang }}</label>
    <Field v-slot="{ field, meta }" :name="name" :rules="rules" v-model="value">
      <textarea
        v-bind="field"
        rows="1"
        cols="50"
        :name="name"
        :id="name"
        :placeholder="placeholder"
        autocomplete="off"
        @input="autoResize"
        class="relative bg-transparent resize-none overflow-y-hidden border rounded-[0.25rem] border-[#6C757D] disabled:border-[#51575F] pl-2 pr-12 py-2 text-base focus:outline-none hover:outline-none placeholder-[#6C757D] w-full"
        :class="[
          !meta.valid && meta.touched ? 'border-[#DC3545]' : '',
          meta.valid && meta.touched ? 'border-[#198754]' : '',
        ]"
      />
    </Field>
  </div>
</template>
