<template>
  <button
    :class="[
      type,
      size,
      {
        rounded: rounded,
        outlined: outlined,
        caps: caps,
        dark: isDark,
        disabled: attrs.disabled !== undefined,
      },
    ]"
    v-bind="$attrs"
  >
    <span v-if="props.label">{{ props.label }} </span>
    <span v-else><slot></slot></span>
  </button>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useAttrs } from "vue";
import { useThemeStore } from "../stores/theme.js";

const themeStore = useThemeStore();
let attrs = useAttrs();
let { isDark } = storeToRefs(themeStore);

const props = defineProps({
  label: String,
  size: {
    type: String,
    default: "md",
  },
  type: {
    type: String,
    default: "primary",
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  caps: {
    type: Boolean,
    default: false,
  },
  outlined: {
    type: Boolean,
    default: false,
  },
});
</script>

<script>
export default {
  inheritAttrs: false,
};
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";

// base button styling: width, height (for sm, md, lg)
button {
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  cursor: pointer;

  &:hover:not(.dark, .disabled) {
    filter: brightness(0.9);
  }
  &:hover:not(.disabled) {
    filter: brightness(1.2);
  }
}

// types <primary, secondary (dark/light), danger>
.primary {
  background: $primary;
  color: $primary-2;
  font-weight: 900;
}

.danger {
  background: $danger;
  color: $white;
  font-weight: 900;
}

.secondary {
  background: $secondary-light;
  color: $secondary-dark;
}

.secondary.dark {
  background: $secondary-dark;
  color: $secondary-light;
}

.important {
  background: $important;
  color: $white;
}

// ____> SIZES <sm, md, lg>
.sm {
  width: auto;
  height: 32px;

  padding: 0px 15px;
  font-size: 13px;
  font-weight: 700;
}
.md {
  width: auto;
  height: 40px;

  padding: 10px 12px;
  font-size: 14px;
}

.lg {
  width: auto;
  height: 46px;

  padding: 16px 20px;
  font-size: 15px;
}

// ____> STYLES: rounded, outlined <primary, secondary (dark/light), danger>, caps
.rounded {
  border-radius: 5px;
}

.caps {
  text-transform: uppercase;
}

.outlined.primary {
  background: transparent;
  border: $btn-border-size solid $primary;
  color: $primary;
}

.outlined.danger {
  background: transparent;
  border: $btn-border-size solid $danger;
  color: $danger;
}

.outlined.secondary {
  background: transparent;
  border: $btn-border-size solid $secondary-dark;
  color: $secondary-dark;
}

.outlined.important {
  background: transparent;
  border: $btn-border-size solid $important;
  color: $important;
}

.outlined.secondary.dark {
  background: transparent;
  border: $btn-border-size solid $secondary-light;
  color: $secondary-light;
}

// .outlined but not .disabled
.outlined:not(.disabled) {
  &:hover {
    background: $color-border-light-1;
    filter: none;
  }
}

.outlined.dark:not(.disabled) {
  &:hover {
    background: $color-border-light-2;
    filter: none;
  }
}

.disabled {
  opacity: 0.3;
  cursor: default !important;

  &:hover {
    filter: none;
  }
}
</style>
