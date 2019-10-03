<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Q1</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 2" step="2">Q2</v-stepper-step>
      <v-divider></v-divider>
       <v-stepper-step :complete="e1 > 3" step="3">Q3</v-stepper-step>
      <v-divider></v-divider>
       <v-stepper-step :complete="e1 > 4" step="4">Q4</v-stepper-step>
      <v-divider></v-divider>
       <v-stepper-step :complete="e1 > 5" step="5">Q5</v-stepper-step>
      <v-divider></v-divider>
       <v-stepper-step :complete="e1 > 6" step="6">Q6</v-stepper-step>
      <v-divider></v-divider>
       <v-stepper-step :complete="e1 > 7" step="7">Q7</v-stepper-step>
      <v-divider></v-divider>
       <v-stepper-step :complete="e1 > 8" step="8">Q8</v-stepper-step>
      <v-divider></v-divider>
       <v-stepper-step :complete="e1 > 9" step="9">Q9</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="10">Q10</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-12"
          color="#eee"
          height="200px"
          style="padding: 1rem;"
        >
            <question-title title="The title for the first question of the quiz"></question-title>
            <question-options options="['first option', 'second', 'third', 'fourth']"></question-options>
        </v-card>

        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Continue
        </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Continue
        </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 1"
        >
          Continue
        </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
                
<script>
import QuestionTitle from './QuestionTitle.vue'
import QuestionOptions from './QuestionOptions.vue'

export default {
    data () {
      return {
        e1: 0,
      }
    },
    components: {
        QuestionTitle,
        QuestionOptions
    }
}
</script>
                        
<style lang='scss'>
                
</style>