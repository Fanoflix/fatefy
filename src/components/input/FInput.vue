<template>
  <div class="control" :class="[rootClasses, { dark: isDark }]">
    <p id="input-label">
      {{ label }}
    </p>

    <input
      v-if="type !== 'textarea'"
      ref="input"
      :type="validatedType"
      class="input"
      :class="[validatedType, state, size, inputClasses, customClasses]"
      v-bind="attrs"
      :value="computedValue"
      @input="onInput"
      @change="onChange"
    />
    <input
      v-else
      type="textarea"
      ref="textarea"
      class="textarea"
      :class="[validatedType, state, size, inputClasses, customClasses]"
      v-bind="attrs"
      :value="computedValue"
      @input="onInput"
      @change="onChange"
    />

    <img
      v-if="revealable && type == 'password'"
      src=""
      alt="reveal"
      class="reveal-icon"
      @click="onIconClick"
    />
    <p class="maxlength" v-if="hasMaxLength">
      {{ valueLength }} / {{ attrs.maxlength }}
    </p>

    <p class="message"></p>
  </div>
</template>

<script setup>
// imports
import { useThemeStore } from "../../stores/theme.js";
import { storeToRefs } from "pinia";
import {
  useAttrs,
  computed,
  ref,
  watch,
  defineProps,
  defineEmits,
  nextTick,
} from "vue";
import config from "../../utils/config.js";

// caches
const themeStore = useThemeStore();
const { isDark } = storeToRefs(themeStore);
const attrs = useAttrs();
const input = ref(null);

// emits
const emits = defineEmits(["update:modelValue"]);

// props
const props = defineProps({
  label: String,
  placeholder: String,
  modelValue: [Number, String],
  size: {
    type: String,
    default: "md",
  },
  lazy: {
    type: Boolean,
    default: false,
  },
  revealable: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "text",
  },
  state: {
    type: String,
    default: "",
  },
  expanded: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  customClasses: {
    type: String,
    default: "",
  },
  hasCounter: {
    type: Boolean,
    default: false,
  },
});

// reactive states
let newValue = ref(props.modelValue);
let newType = ref(props.type);
let isPasswordVisible = ref(false);

// methods
const onInput = (event) => {
  if (!props.lazy) {
    updateValue(event.target.value);
  }
};

const onChange = (event) => {
  if (props.lazy) {
    updateValue(event.target.value);
  }
};

const onIconClick = () => {
  if (props.type === "password" && props.revealable) {
    togglePasswordVisibility();
  } // TODO: else call a passed method
};

const togglePasswordVisibility = async () => {
  isPasswordVisible.value = !isPasswordVisible.value;
  validatedType.value = isPasswordVisible.value ? "text" : "password";
  await nextTick();
  input.value.focus(); // refocus the input element after changing the type
};

const updateValue = (value) => {
  computedValue.value = value;
};

// watchers
watch(
  () => props.modelValue,
  (val) => {
    newValue.value = val;
  }
);

// computed properties
let computedValue = computed({
  get() {
    return newValue.value;
  },
  set(value) {
    newValue.value = value;
    emits("update:modelValue", value);
  },
});

const validatedType = computed({
  get() {
    if (config.allowedInputTypes.includes(newType.value)) {
      return newType.value;
    } else return "text";
  },
  set(val) {
    newType.value = val;
  },
});

const rootClasses = computed(() => {
  return [
    props.size,
    {
      expanded: props.expanded,
    },
  ];
});

const inputClasses = computed(() => {
  return {
    rounded: props.rounded,
    disabled: isDisabled,
    dark: isDark,
  };
});

const isDisabled = computed(() => {
  return (
    attrs.disabled !== undefined &&
    attrs.disabled !== false &&
    attrs.disabled !== "false"
  );
});

const hasMaxLength = computed(() => {
  return (
    attrs.maxlength !== undefined &&
    attrs.maxlength > -1 &&
    props.hasCounter &&
    props.type !== "number"
  );
});

const valueLength = computed(() => {
  if (typeof computedValue.value == "number") {
    return computedValue.value.toString().length;
  } else if (typeof computedValue.value == "string") {
    return computedValue.value.length;
  } else {
    return 0;
  }
});
</script>

<!-- inheritAttrs = false -->
<script>
export default {
  inheritAttrs: false,
};
</script>
