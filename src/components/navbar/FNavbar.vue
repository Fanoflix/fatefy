<template>
  <section class="navbar">
    <div class="left">
      <FButton
        type="secondary"
        label="Home"
        size="sm"
        transparent
        @click="$router.push('/')"
      />

      <FButton
        type="primary"
        label="Login"
        size="sm"
        @click="$router.push('/login')"
      />

      <FButton
        type="primary"
        label="Signup"
        size="sm"
        @click="$router.push('/signup')"
      />
    </div>

    <div class="right">
      <FButton
        type="important"
        label="Button Component Showcase"
        size="sm"
        @click="$router.push('/buttonShowcase')"
      />

      <FButton
        type="important"
        label="Input Component Showcase"
        size="sm"
        @click="$router.push('/inputShowcase')"
      />

      <f-button
        type="secondary"
        size="sm"
        label="Change Theme"
        @click="changeTheme"
      />
    </div>
  </section>
</template>

<script setup>
import FButton from "../button/FButton.vue";
import { useThemeStore } from "../../stores/theme.js";

const themeStore = useThemeStore();
const { changeTheme } = themeStore; // same thing as the above line
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.navbar {
  z-index: $z-top;
  position: sticky;
  top: 0;

  display: flex;
  justify-content: space-around;
  width: 100%;
  height: $nav-height;
  background-color: $card-bg-color-light;

  .left {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      margin-right: $global-aesthetic-margin;
    }
  }

  .right {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      margin-left: $global-aesthetic-margin;
    }
  }
}

.dark {
  .navbar {
    background-color: $card-bg-color-dark;
  }
}
</style>
