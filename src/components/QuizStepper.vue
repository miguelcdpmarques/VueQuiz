<template>
  <v-stepper v-model="currentStep">
    <v-stepper-header>
      <v-stepper-step  v-for="s in steps" :key="s.id" :complete="currentStep > s.id" :step="s.id">Q{{ s.id }}</v-stepper-step>
      <!-- <v-divider v-if="s.id !== steps.length - 1"></v-divider> -->
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content v-for="s in steps" :step="s.id" :key="s.id">
        <v-card class="mb-12" color="#eee" height="200px" style="padding: 1rem; height: auto;">
          <question v-model="selectedOptions[s.id]" :question="s" />
        </v-card>

        <v-btn color="primary" @click="currentStep++" v-if="s.id !== steps.length">Continue</v-btn>
        <v-btn color="primary" @click="showCompleteModal = true" v-else>Complete</v-btn>

        <v-dialog v-model="showCompleteModal" width="500" v-if="s.id === steps.length">
          <v-card>
            <h2 class="text-center">CONGRATS!</h2>
            <v-form>
              <v-container>
                <v-text-field
                  v-model="name"
                  label="name"
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  label="email"
                ></v-text-field>
                <v-text-field
                  v-model="web"
                  label="web (linkedin / personal site / github"
                ></v-text-field>
                <v-btn color="primary" @click="submit">Submit</v-btn>
              </v-container>
            </v-form>
          </v-card>
        </v-dialog>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import Question from './Question'

export default {
  components: {
    Question
  },
  mounted () {
    this.leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || []
  },
  data () {
    return {
      leaderboard: [],
      currentStep: 1,
      steps: [
        {
          id: 1,
          title: 'The title for the first question of the quiz',
          options: ['first option', 'second', 'third', 'fourth'],
          img: '',
          correctOption: 0
        },
        {
          id: 2,
          title: 'The title for the second question of the quiz',
          options: ['first option', 'second', 'third', 'fourth'],
          correctOption: 0
        },
        {
          id: 3,
          title: 'The title for the third question of the quiz',
          options: ['first option', 'second', 'third', 'fourth'],
          correctOption: 0
        },
        {
          id: 4,
          title: 'The title for the fourth question of the quiz',
          options: ['first option', 'second', 'third', 'fourth'],
          correctOption: 0
        },
        {
          id: 5,
          title: 'The title for the fifth question of the quiz',
          options: ['first option', 'second', 'third', 'fourth'],
          correctOption: 0
        },
        {
          id: 6,
          title: 'The title for the sixth question of the quiz',
          options: ['first option', 'second', 'third', 'fourth'],
          correctOption: 0
        },
        {
          id: 7,
          title: 'The title for the seventh question of the quiz',
          options: ['first option', 'second', 'third', 'fourth'],
          correctOption: 0
        },
        {
          id: 8,
          title: 'The title for the eighth question of the quiz',
          options: ['first option', 'second', 'third', 'fourth'],
          correctOption: 0
        },
        {
          id: 9,
          title: 'The title for the ninth question of the quiz',
          options: ['first option', 'second', 'third', 'fourth'],
          correctOption: 0
        },
        {
          id: 10,
          title: 'The title for the tenth question of the quiz',
          options: ['first option', 'second', 'third', 'fourth'],
          correctOption: 0
        }
      ],
      selectedOptions: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      correctOptions: [0, 1, 0, 2, 1, 0, 0, 0, 1, 1],
      showCompleteModal: false,
      name: '',
      email: '',
      web: ''
    }
  },
  methods: {
    submit () {
      this.leaderboard.push({
        score: 1,
        name: this.name,
        time: new Date(),
        email: this.email,
        web: this.web
      })
      localStorage.setItem('leaderboard', JSON.stringify(this.leaderboard))
      this.showCompleteModal = false
      this.$router.push('/')
    }
  }
}
</script>

<style lang='scss'>
</style>
