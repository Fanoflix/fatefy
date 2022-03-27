<template>
  <div :style="cssProps" :class="[containerClasses, customClasses]">
    <h2 class="heading" v-if="heading">
      {{ heading }}
    </h2>

    <slot>
      <p class="empty">
        {{ emptyText || "Empty" }}
      </p>
    </slot>
  </div>
</template>

<script setup>
// Imports
import { useThemeStore } from "../../stores/theme.js";
import { storeToRefs } from "pinia";
import { computed } from "vue";

// State

// Reactive State
const themeStore = useThemeStore();
const { isDark } = storeToRefs(themeStore);

// Props
const props = defineProps({
  heading: {
    type: String,
    default: null,
  },
  emptyText: {
    type: String,
    default: null,
  },
  // structure
  width: {
    type: String,
    default: "300",
  },
  wrap: {
    type: Boolean,
    default: false,
  },
  height: {
    type: String,
    default: "500",
  },
  row: {
    type: Boolean,
    default: false,
  },
  column: {
    type: Boolean,
    default: false,
  },
  // style
  transparent: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  bordered: {
    type: Boolean,
    default: false,
  },
  customClasses: {
    type: String,
    default: "",
  },
  // [tentative]
  padding: {
    type: String,
    default: "default", // 1, 2, 3
  },
});

// Exposed

// Emits

// Methods

// Computed
const containerClasses = computed(() => {
  return [
    "fcontainer",
    {
      row: props.row,
      column: props.column,
      wrap: props.wrap,
      "p-default": props.padding == "default" || props.padding == "",
      "p-1": props.padding === "1",
      "p-2": props.padding === "2",
      "p-3": props.padding === "3",
      rounded: props.rounded,
      bordered: props.bordered,
      transparent: props.transparent,
      dark: isDark.value,
    },
  ];
});

const cssProps = computed(() => {
  return {
    "--width": props.width + "px",
    "--height": props.height + "px",
  };
});

// Watchers
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";

.fcontainer {
  // base styling for container
  width: var(--width);
  height: var(--height);
  background: $container-bg-color-light;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  // transparent
  &.transparent {
    background-color: transparent;
  }

  // flex: row and column
  &.row {
    flex-direction: row;
  }

  &.column {
    flex-direction: column;
  }

  &.wrap {
    flex-wrap: wrap;
  }

  &.rounded {
    border-radius: $global-border-radius;
  }

  // paddings
  &.p-default {
    padding: 10px $container-default-padding;
  }
  &.p-1 {
    padding: 0.6rem 1rem;
  }

  &.p-2 {
    padding: 1rem 2rem;
  }

  &.p-3 {
    padding: 1.2rem 3rem;
  }

  .heading {
    height: 30px;
  }
}

.dark {
  .fcontainer {
    background: $container-bg-color-dark;
  }
}
</style>
