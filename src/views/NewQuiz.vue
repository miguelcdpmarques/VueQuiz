<template>
  <div class="newquiz">
    <v-container>
      <quiz-stepper></quiz-stepper>
    </v-container>
  </div>
</template>

<script>
import QuizStepper from '../components/QuizStepper.vue'

export default {
  name: 'newquiz',
  components: {
    QuizStepper
  }
}
</script>
