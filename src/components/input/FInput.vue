<template>
  <div class="control" :class="[rootClasses, { dark: isDark }]">
    <p class="input-label">{{ label }} <span v-if="isRequired">*</span></p>

    <input
      v-if="type !== 'textarea'"
      :type="validatedType"
      ref="input"
      class="input"
      :class="[validatedType, inputClasses, customClasses]"
      v-bind="attrs"
      :placeholder="placeholder"
      :value="computedValue"
      @input="onInput"
      @change="onChange"
    />
    <textarea
      v-else
      ref="textarea"
      class="textarea"
      :class="[validatedType, inputClasses, customClasses]"
      v-bind="attrs"
      :placeholder="placeholder"
      :value="computedValue"
      @input="onInput"
      @change="onChange"
    />

    <img
      v-if="revealable && type == 'password'"
      src=""
      alt="reveal"
      class="reveal-icon selectable"
      @click="onIconClick"
    />
    <p class="counter" v-if="hasMaxLength">
      {{ valueLength }} / {{ attrs.maxlength }}
    </p>

    <p class="validation message" v-if="state == 'error'">
      {{ validationMessage }}
    </p>
    <p class="success message" v-else-if="state == 'success'">
      {{ successMessage }}
    </p>
  </div>
</template>

<script setup>
// imports
import { useThemeStore } from "../../stores/theme.js";
import { storeToRefs } from "pinia";
import { useAttrs, computed, ref, watch, nextTick } from "vue";
import config from "../../utils/config.js";

// State
const themeStore = useThemeStore();
const { isDark } = storeToRefs(themeStore);
const attrs = useAttrs();

// Component State
const newValue = ref(props.modelValue);
const newType = ref(props.type);
const isPasswordVisible = ref(false);
const input = ref(null);

// Emits
const emits = defineEmits(["update:modelValue"]);

// Props
const props = defineProps({
  label: String,
  placeholder: String,
  validationMessage: String,
  successMessage: String,
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
  bordered: {
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

/*
 Methods
*/
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

/*
 Watchers
*/
watch(
  () => props.modelValue,
  (val) => {
    newValue.value = val;
  }
);

/*
 Computed
*/
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
      disabled: isDisabled.value,
    },
  ];
});

const inputClasses = computed(() => {
  return [
    props.size,
    props.state,
    {
      rounded: props.rounded,
      bordered: props.bordered,
      dark: isDark.value,
    },
  ];
});

const isDisabled = computed(() => {
  return (
    attrs.disabled !== undefined &&
    attrs.disabled !== false &&
    attrs.disabled !== "false"
  );
});

const isRequired = computed(() => {
  return (
    attrs.required !== undefined &&
    attrs.required !== false &&
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

<style scoped lang="scss">
@import "@/assets/variables.scss";

.control {
  // base control styling
  display: flex;
  flex-flow: nowrap column;
  align-items: center;
  justify-content: center;
  width: 100%;

  font-weight: 300;

  &.disabled {
    opacity: 0.5;
    filter: grayscale(1) brightness(0.8);
  }

  // base label styling
  .input-label {
    display: block;
    align-self: flex-start;
    text-transform: capitalize;

    line-height: 1.3;
    font-weight: 500;
    font-size: 14px;
    color: $label-light;
  }

  // base validation message styling
  .message {
    display: block;
    align-self: flex-start;

    font-weight: 400;
    font-size: 13px;
  }
  .validation.message {
    color: $error;
  }

  .success.message {
    color: $success-light;
  }

  // common styling for both
  .input,
  .textarea {
    outline: none;
    background-color: $white-soft;
    border: $global-border-size solid transparent;

    padding: 4px 10px;

    height: 44px;
    width: 100%;

    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: 400;

    // bordered, success, error
    &.bordered {
      border-color: $color-border-light-1;
    }

    &.error {
      border-color: $error;
    }

    &.success {
      border-color: $success-light;
    }

    // rounded
    &.rounded.sm {
      border-radius: $global-border-radius - 2px;
    }
    &.rounded.md {
      border-radius: $global-border-radius - 1px;
    }
    &.rounded.lg {
      border-radius: $global-border-radius;
    }
  }

  .input {
    &.sm {
      height: 28px;
      font-size: 14px;
    }

    &.md {
      height: 44px;
      font-size: 15px;
    }

    &.lg {
      height: 62px;
      font-size: 18px;
      font-weight: 300;
    }
  }

  .textarea {
    // size: sm, md, lg
    &.sm {
      height: 56px;
      font-size: 14px;
    }

    &.md {
      height: 74px;
      font-size: 15px;
    }

    &.lg {
      height: 98px;
      font-size: 18px;
      font-weight: 300;
    }
  }
}

/*
  DARKMODE
*/
.dark {
  .control {
    .input-label {
      color: $label-dark;
    }
    .success.message {
      color: $success-dark;
    }

    .input,
    .textarea {
      background-color: $black-soft;
      color: $text-dark;

      &.bordered {
        border-color: $color-border-dark-1;
      }

      &.error {
        border-color: $error;
      }

      &.success {
        border-color: $success-dark;
      }
    }
  }
}
</style>
