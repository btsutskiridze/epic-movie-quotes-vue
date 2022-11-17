<script setup>
import { Field } from "vee-validate";

// import { ref } from "vue";
defineProps({
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
});
</script>

<template>
  <div class="relative">
    <label :for="name" class="absolute right-4 top-2">{{ lang }}</label>
    <Field :name="name" v-slot="{ field, meta }" :rules="rules">
      <input
        v-bind="field"
        :id="name"
        :type="type"
        :placeholder="!lang ? $t(placeholder) : placeholder"
        class="relative bg-transparent resize-none overflow-y-hidden border rounded-[0.25rem] border-[#6C757D] pl-2 pr-12 py-2 text-base focus:outline-none hover:outline-none placeholder-[#6C757D] w-full"
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
