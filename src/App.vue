<template>
  <f-button type="important" label="Change Theme" @click="changeTheme" />
  <RouterView />
</template>

<script setup>
import FButton from "./components/FButton.vue";
import { RouterView } from "vue-router";
import { useThemeStore } from "./stores/theme.js";
// import { storeToRefs } from "pinia";
import { onBeforeMount } from "vue";

// TODO: Extract this snippet wherever you implement the 'Switch Theme' button

const themeStore = useThemeStore();
let body = document.querySelector("body");
// const { isDark } = storeToRefs(themeStore);
// const { changeTheme } = mapActions(useThemeStore, ["changeTheme"]);
const { changeTheme, setIsDark } = themeStore; // same thing as the above line

onBeforeMount(() => {
  let storedIsDark = JSON.parse(localStorage.getItem("isDark"));
  setIsDark(storedIsDark);
  if (storedIsDark) body.classList.add("dark");
  else body.classList.remove("dark");
});

// changing Body's background color
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

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}
</style>
