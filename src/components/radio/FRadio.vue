<template>
  <label
    class="f-radio"
    ref="label"
    @click="focus"
    @keydown.prevent.enter="$refs.label.click()"
    :disabled="disabled"
    :class="labelClasses"
  >
    <slot />
    <input
      ref="input"
      type="radio"
      :class="inputClasses"
      v-model="computedValue"
      :value="nativeValue"
      :name="name"
    />
  </label>
</template>

<script setup>
// Imports
import { ref, computed, watch } from "vue";

// State

// Reactive State
const newValue = ref(props.modelValue);
const input = ref(null);

// Props
const props = defineProps({
  modelValue: [String, Number, Boolean, Function, Object, Array],
  nativeValue: [String, Number, Boolean, Function, Object, Array],
  name: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
});

// Emits
const emits = defineEmits(["update:modelValue"]);

// Methods
function focus() {
  input.value.focus();
}

// Watch
watch(
  () => props.modelValue,
  (val) => {
    newValue.value = val;
  }
);

// Computed
const computedValue = computed({
  get() {
    return newValue.value;
  },
  set(value) {
    newValue.value = value;
    emits("update:modelValue", value);
  },
});

const labelClasses = computed(() => {
  return [
    "no-select",
    {
      disabled: props.disabled,
      required: props.required,
    },
  ];
});
const inputClasses = computed(() => {
  return [
    {
      disabled: props.disabled,
    },
  ];
});
</script>

<style scoped lang="scss">
.f-radio {
}
</style>
