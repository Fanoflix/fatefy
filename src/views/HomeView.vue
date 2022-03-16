<template>
  <main>Home</main>

  <f-button size="lg" caps rounded label="Primary"></f-button>
  <br />

  <f-button
    type="important"
    disabled
    rounded
    size="sm"
    label="disabled"
  ></f-button>
  <br />

  <f-button type="danger" size="md" rounded label="Danger"></f-button>
  <br />

  <f-button
    outlined
    type="important"
    size="lg"
    rounded
    label="Important caps"
  ></f-button>
  <br />

  <f-button type="secondary" caps size="md" label="Secondary caps"></f-button>
  <br />

  <f-button type="secondary" size="lg" label="Secondary "></f-button>
  <br />
</template>

<script setup>
import FButton from "../components/FButton.vue";
</script>
