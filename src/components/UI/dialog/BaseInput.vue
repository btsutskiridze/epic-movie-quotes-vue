<script setup>
import { Field } from "vee-validate";
import { ref } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    reuqired: false,
    default: "text",
  },
  rules: {
    type: String,
    required: false,
  },
  placeholder: {
    type: String,
    required: false,
  },
  lang: {
    type: String,
    required: false,
  },
  model: {
    type: [String, Number],
    required: false,
  },
});
const value = ref(props.model);
</script>

<template>
  <div class="relative">
    <label :for="name" class="absolute right-4 top-2">{{ lang }}</label>
    <Field :name="name" v-slot="{ field, meta }" :rules="rules" v-model="value">
      <input
        v-bind="field"
        :id="name"
        :type="type"
        :placeholder="!lang ? $t(placeholder) : placeholder"
        class="relative w-full resize-none overflow-y-hidden rounded-[0.25rem] border border-[#6C757D] bg-transparent py-2 pl-2 pr-12 text-base placeholder-[#6C757D] hover:outline-none focus:outline-none"
        :class="[
          !meta.valid && meta.touched ? 'border-[#DC3545]' : '',
          meta.valid && meta.touched ? 'border-[#198754]' : '',
        ]"
        autocomplete="off"
      />
    </Field>
  </div>
</template>

<style></style>
