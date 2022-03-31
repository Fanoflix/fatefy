<template>
  <section class="quiz">
    <FRadio name="test" v-model="radioValue" :native-value="valueA">
      Option
    </FRadio>
    <br /><br />
    <FRadio name="test" v-model="radioValue" :native-value="valueB">
      Option 2</FRadio
    >
    <br /><br />
    <p>{{ radioValue }}</p>
  </section>
</template>

<script setup>
import FRadio from "../components/radio/FRadio.vue";
import { ref } from "vue";
const radioValue = ref(1);
const valueA = ref({ name: "Ammar" });
const valueB = ref({ name: "Else" });
console.log(radioValue.value);
</script>
