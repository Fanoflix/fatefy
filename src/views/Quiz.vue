<template>
  <section class="quiz">
    <FContainer
      class="question"
      :heading="`${index}. Most Local Companies do not do Code Review.`"
      rounded
      padding="1"
    >
      <FRadio rounded name="test" v-model="radioValue" :native-value="valueA">
        Strongly Agree
      </FRadio>
      <FRadio rounded name="test" v-model="radioValue" :native-value="valueB">
        Agree
      </FRadio>
      <FRadio rounded name="test" v-model="radioValue" :native-value="valueC">
        Disagree
      </FRadio>
      <FRadio rounded name="test" v-model="radioValue" :native-value="valueD">
        I do not have a strong feeling about this one. I might have to check and
        confirm
      </FRadio>
      <p>{{ radioValue }}</p>
    </FContainer>

    <FContainer
      class="question"
      rounded
      heading="3. Any comments or notes regarding Code Review?"
      padding="1"
    >
      <FInput rounded type="textarea" placeholder="Your answer" />
    </FContainer>

    <br /><br />
  </section>
</template>

<script setup>
import FRadio from "../components/radio/FRadio.vue";
import FContainer from "../components/container/FContainer.vue";
import FInput from "../components/input/FInput.vue";

import { ref } from "vue";
const radioValue = ref(null);
const index = "2";
const valueA = ref("StronglyYY Agree");
const valueB = ref("Agree");
const valueC = ref("Disagree");
const valueD = ref("Strongly Disagree");
console.log(radioValue.value);
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.quiz {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: $global-center-content-width;

  .question {
    margin-bottom: 15px;
  }
}
</style>
