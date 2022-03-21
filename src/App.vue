<template>
  <div class="nav">
    <div class="left">
      <FButton
        type="secondary"
        label="Home"
        size="md"
        expanded
        @click="$router.push('/')"
      />

      <FButton
        type="primary"
        label="Login"
        size="md"
        @click="$router.push('/login')"
      />

      <FButton
        type="primary"
        label="Signup"
        outlined
        size="md"
        @click="$router.push('/signup')"
      />
    </div>

    <div class="right">
      <FButton
        type="secondary"
        label="See Button Component"
        size="sm"
        @click="$router.push('/buttonShowcase')"
      />

      <FButton
        type="secondary"
        label="See Input Component"
        size="sm"
        @click="$router.push('/inputShowcase')"
      />

      <f-button
        type="important"
        size="sm"
        label="Change Theme"
        @click="changeTheme"
      />
    </div>
  </div>

  <div class="current-view">
    <RouterView />
  </div>
</template>

<script setup>
import FButton from "./components/button/FButton.vue";
import { RouterView } from "vue-router";
import { useThemeStore } from "./stores/theme.js";
import { onBeforeMount } from "vue";

// TODO: Extract this snippet wherever you implement the 'Switch Theme' button

const themeStore = useThemeStore();
let body = document.querySelector("body");
// const { isDark } = storeToRefs(themeStore);
// const { changeTheme } = mapActions(useThemeStore, ["changeTheme"]);
const { changeTheme, setIsDark } = themeStore; // same thing as the above line

onBeforeMount(() => {
  let storedIsDark = JSON.parse(localStorage.getItem("isDark"));
  if (storedIsDark) {
    body.classList.add("dark");
    setIsDark(storedIsDark);
  }
});

// changing Body's background color according to isDark in store theme.js
themeStore.$subscribe((_, state) => {
  if (state.isDark) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
});

// TODO =========================================== END ===========
</script>

<style lang="scss">
@import "@/assets/variables.scss";
@import "@/assets/base-styling.scss";
@include base-styling;

.nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 5vh;

  .left {
    display: flex;

    button {
      margin-right: 6px;
    }
  }

  .right {
    display: flex;
    button {
      margin-left: 6px;
    }
  }
}

.current-view {
  width: 100%;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
