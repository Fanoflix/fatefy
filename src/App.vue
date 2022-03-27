<template>
  <FNavbar />
  <FSidebar />

  <div class="current-view">
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import { useThemeStore } from "./stores/theme.js";
import { onBeforeMount } from "vue";
import FNavbar from "./components/navbar/FNavbar.vue";
import FSidebar from "./components/sidebar/FSidebar.vue";

const themeStore = useThemeStore();
let body = document.querySelector("body");
const { setIsDark } = themeStore; // same thing as the above line

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
</script>

<style lang="scss">
@import "@/assets/variables.scss";
@import "@/assets/base-styling.scss";
@include base-styling;

.nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 5vh;

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
