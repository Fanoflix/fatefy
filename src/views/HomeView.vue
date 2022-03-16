<template>
  <main>Home</main>
  <f-button size="sm" caps disabled label="Primary"></f-button>
  <br />

  <f-button
    type="important"
    rounded
    size="sm"
    disabled
    label="disabled"
  ></f-button>
  <br />

  <f-button type="danger" size="md" label="Danger"></f-button>
  <br />

  <f-button
    outlined
    type="important"
    size="lg"
    disabled
    label="Important caps"
  ></f-button>
  <br />

  <f-button
    type="secondary"
    disabled
    size="sm"
    outlined
    label="Secondary caps outlined"
  ></f-button>
  <br />
</template>

<script setup>
import FButton from "../components/FButton.vue";
</script>
