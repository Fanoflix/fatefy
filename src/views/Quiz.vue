<template>
  <section class="questionnaire" v-if="isFinished && !error">
    <!-- v-if="error" fetching the survey, then show an error card -->
    <!-- v-if="isLoading" then show a spinner -->
    <!-- v-if="isFinished" -->

    <!-- <pre>{{ data }}</pre> -->
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
          v-model="question.answerChoiceText"
          :native-value="choice.choiceText"
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
          v-model="question.answerText"
          scale="y"
          size="sm"
          :required="question.required"
        />
      </span>
    </FContainer>

    <FButton
      label="Submit Response"
      size="md"
      @click.prevent="submit"
    ></FButton>
  </section>
</template>

<script setup>
import FContainer from "../components/container/FContainer.vue";
import FRadio from "../components/radio/FRadio.vue";
import FInput from "../components/input/FInput.vue";
import FButton from "../components/button/FButton.vue";
import processRequest from "../utils/processRequest.js";

import { useAxios } from "@/composables/useAxios.js";
import { onMounted, ref, reactive, nextTick } from "vue";

const url = "http://localhost:5000";
const { data, isLoading, error, isFinished } = useAxios(`${url}/survey/1`);

function submit() {
  processRequest("response", "post", data.value).then((res) => {
    console.log(res);
  });
}
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.questionnaire {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: $global-center-content-width;

  pre {
    font-size: 10px;
  }

  .question {
    margin-bottom: 15px;
  }
}
</style>
