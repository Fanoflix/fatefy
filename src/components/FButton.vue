<template>
  <button
    v-bind="$attrs"
    :class="[
      type,
      size,
      {
        rounded: rounded,
        outlined: outlined,
        caps: caps,
        dark: isDark,
        disabled:
          $attrs.disabled !== undefined &&
          $attrs.disabled !== false &&
          $attrs.disabled !== 'false', // create computed here
      },
    ]"
  >
    <span v-if="props.label">{{ props.label }} </span>
    <span v-else><slot></slot></span>
  </button>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useThemeStore } from "../stores/theme.js";

const themeStore = useThemeStore();
let { isDark } = storeToRefs(themeStore);

const props = defineProps({
  label: String,
  size: {
    type: String,
    default: "md",
    // validator: (val) => {
    //   if (val !== "sm" || val !== "md" || val !== "lg") {
    //     return "no";
    //   }
    // },
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
  font-weight: 400;
  cursor: pointer;

  &:hover:not(.dark, .disabled) {
    filter: brightness(0.9) contrast(1.1);
  }
  &:hover.dark:not(.disabled) {
    filter: brightness(1.2);
  }
}

// types <primary, secondary (dark/light), danger>
.primary {
  background: $primary;
  font-weight: 700;

  &.primary:not(.dark, .outlined) {
    color: $color-background;
  }

  &.primary.dark:not(.outlined) {
    color: $color-background-dark;
  }
}

.danger {
  background: $danger;
  color: $white;
  font-weight: 700;
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
  height: 30px;

  padding: 0px 15px;
  font-size: 13px;
  font-weight: 700;
}
.md {
  width: auto;
  height: 44px;

  padding: 0px 16px;
  font-size: 14px;
}

.lg {
  width: auto;
  height: 58px;

  padding: 0px 22px;
  font-size: 15px;
}

// ____> STYLES:  caps, rounded, outlined <primary, secondary (dark/light), danger>
.rounded {
  border-radius: 5px;
}

.caps {
  text-transform: uppercase;

  &.lg {
    font-size: 14px;
  }
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
.outlined:not(.disabled, .dark) {
  &:hover {
    background: $btn-hover-light-1;
    filter: none;
  }
}

.outlined.dark:not(.disabled) {
  &:hover {
    background: $btn-hover-light-2;
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
