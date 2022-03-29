<template>
  <FRadio name="test" v-model="radioValue" native-value="a"> Option </FRadio>
  <br /><br />
  <FRadio name="test" v-model="radioValue" native-value="b"> Option 2</FRadio>
  <br /><br />
  <p>{{ radioValue }}</p>
</template>

<script setup>
import FRadio from "../components/radio/FRadio.vue";
import { ref } from "vue";
const radioValue = ref("");
console.log(radioValue.value);
</script>
