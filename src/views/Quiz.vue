<template>
  <section class="quiz">
    <FContainer
      class="question"
      :heading="`${index}. Most Local Companies do not do Code Review.`"
      rounded
      padding="1"
    >
      <FRadio rounded name="1" v-model="radioValue" :native-value="valueA">
        Strongly Agree
      </FRadio>
      <FRadio rounded name="1" v-model="radioValue" :native-value="valueB">
        Agree
      </FRadio>
      <FRadio rounded name="1" v-model="radioValue" :native-value="valueC">
        Disagree
      </FRadio>
      <FRadio rounded name="1" v-model="radioValue" :native-value="valueD">
        I do not have a strong feeling about this one. I might have to check and
        confirm
      </FRadio>
    </FContainer>

    <FContainer
      class="question"
      heading="How regular are Code Reviews at your company?"
      rounded
      padding="1"
    >
      <FRadio rounded name="2"> Daily or every 2 days </FRadio>
      <FRadio rounded name="2"> Twice a week </FRadio>
      <FRadio rounded name="2"> Weekly </FRadio>
      <FRadio rounded name="2"> Monthly </FRadio>
      <FRadio rounded name="2"> Occasionally </FRadio>
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
