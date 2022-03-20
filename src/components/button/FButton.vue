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
        disabled: isDisabled,
      },
    ]"
  >
    <span v-if="label">{{ label }} </span>
    <span v-else><slot></slot></span>
  </button>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { computed, useAttrs } from "vue";
import { useThemeStore } from "../../stores/theme.js";

const props = defineProps({
  // ! Code inside the defineProps() argument cannot access other variables declared in <script setup>, because the entire expression is moved to an outer function scope when compiled.

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

const themeStore = useThemeStore();
let { isDark } = storeToRefs(themeStore);
const attrs = useAttrs();
const isDisabled = computed(() => {
  return (
    attrs.disabled !== undefined &&
    attrs.disabled !== false &&
    attrs.disabled !== "false"
  );
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

  border: $global-border-size solid transparent;
  font-weight: 400;
  cursor: pointer;

  &:hover:not(.dark, .disabled) {
    filter: brightness(0.9) contrast(1.1);
  }
  &:hover.dark:not(.disabled) {
    filter: brightness(1.2);
  }

  // fallback bg color (primary)
  background: $primary;

  // fallback size (md)
  width: auto;
  height: 44px;

  padding: 0px 16px;
  font-size: 14px;
}

// ____> TYPES <primary, secondary (dark/light), danger>
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
  height: 38px;

  padding: 0px 15px;
  font-size: 13px;
  font-weight: 700;
}
.md {
  width: auto;
  height: 48px;

  padding: 0px 16px;
  font-size: 14px;
}

.lg {
  width: auto;
  height: 58px;

  padding: 0px 22px;
  font-size: 15px;
}

// ____> STYLES:  caps, rounded, transparent, outlined <primary, secondary (dark/light), danger>
.rounded {
  border-radius: $global-border-radius;
}

.caps {
  text-transform: uppercase;

  &.sm {
    font-size: 12px;
  }

  &.md {
    font-size: 13px;
  }

  &.lg {
    font-size: 15px;
  }
}

.outlined.primary {
  background: transparent;
  border: $global-border-size solid $primary;
  color: $primary;
}

.outlined.danger {
  background: transparent;
  border: $global-border-size solid $danger;
  color: $danger;
}

.outlined.secondary {
  background: transparent;
  border: $global-border-size solid $secondary-dark;
  color: $secondary-dark;
}

.outlined.important {
  background: transparent;
  border: $global-border-size solid $important;
  color: $important;
}

.outlined.secondary.dark {
  background: transparent;
  border: $global-border-size solid $secondary-light;
  color: $secondary-light;
}

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