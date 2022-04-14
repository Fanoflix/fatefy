<template>
  <section class="quiz" v-if="isFinished">
    <FContainer
      class="question"
      padding="1"
      rounded
      v-for="(question, idx) in data.survey.questions"
      :key="question.id"
      :heading="`${idx + 1}. ${question.title}`"
    >
      <span v-if="question.type == 'radio'">
        <FRadio
          rounded
          :name="question.id"
          v-for="choice in question.questionChoices"
          :key="choice.id"
          :native-value="choice.id"
        >
          {{ choice.choiceText }}
        </FRadio>
      </span>
      <span v-else>
        <FInput
          rounded
          :label="
            question.subtext ? `Required. ${question.subtext}` : 'Required'
          "
          :type="question.type"
          scale="y"
          size="md"
          :required="question.required"
        />
      </span>
    </FContainer>

    <br /><br />
  </section>
</template>

<script setup>
import FRadio from "../components/radio/FRadio.vue";
import FContainer from "../components/container/FContainer.vue";
import FInput from "../components/input/FInput.vue";
import { useAxios } from "@/composables/useAxios.js";

const { data, isLoading, isFinished, error } = useAxios(
  "http://localhost:5000/survey/1"
);
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
