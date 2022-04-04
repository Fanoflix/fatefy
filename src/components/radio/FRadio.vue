<template>
  <label
    ref="label"
    @click="focus"
    @keydown.prevent.enter="$refs.label.click()"
    :disabled="disabled"
    class="radio-control"
    :class="controlClasses"
  >
    <input
      ref="input"
      type="radio"
      class="f-radio"
      :class="inputClasses"
      v-model="computedValue"
      :value="nativeValue"
      :name="name"
    />
    <slot />
  </label>
</template>

<script setup>
// Imports
import { storeToRefs } from "pinia";
import { ref, computed, watch } from "vue";
import { useThemeStore } from "../../stores/theme";

// State

// Reactive State
const newValue = ref(props.modelValue);
const input = ref(null);
const themeStore = useThemeStore();
const { isDark } = storeToRefs(themeStore);

// Props
const props = defineProps({
  modelValue: [String, Number, Boolean, Function, Object, Array],
  nativeValue: [String, Number, Boolean, Function, Object, Array],
  name: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: "md",
  },
  type: {
    type: String,
    default: "radio",
  },
  rounded: {
    type: Boolean,
    default: false,
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

const controlClasses = computed(() => {
  return [
    "no-select",
    {
      rounded: props.rounded,
      disabled: props.disabled,
      required: props.required,
      dark: isDark.value,
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
@import "@/assets/variables.scss";
.radio-control {
  &:hover {
    background-color: $white-soft;
  }
  cursor: pointer;

  padding: (2 * $global-padding) ($global-padding + 4px);
  font-size: 14px;
  margin: 2px;
  line-height: 1.3;

  display: flex;

  &.rounded {
    border-radius: $global-border-radius;
  }
  .f-radio {
    display: inline-flex;
    cursor: pointer;
    margin-right: $global-aesthetic-margin;
    margin-top: 3px;
  }
}

.dark.radio-control {
  &:hover,
  &:active {
    background-color: $black-soft;
  }
}
</style>
