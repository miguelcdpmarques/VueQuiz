<template>
  <div>
    <v-stepper v-model="currentStep">
      <v-stepper-header>
        <v-stepper-step  v-for="s in steps" :key="s.id" :complete="currentStep > s.id" :step="s.id">Q{{ s.id }}</v-stepper-step>
        <!-- <v-divider v-if="s.id !== steps.length - 1"></v-divider> -->
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content v-for="s in steps" :step="s.id" :key="s.id">
          <v-card class="mb-12" color="#eee" height="200px" style="padding: 1rem; height: auto;">
            <div>
              <h2 class="question-title">{{ s.title }}</h2>
              <figure v-if="s.img">
                <img :src="s.img">
              </figure>
              <br />
              <div v-for="(option, i) in s.options" :key="option">
                <input type="radio" :id="i" class="mr-10 mb-10" name="question.title" v-model="selectedOptions[s.id - 1]" :value="i" />
                <label :for="i" class="question-option">{{ option }}</label>
              </div>
            </div>
          </v-card>

          <v-btn color="primary" @click="currentStep++" v-if="s.id !== steps.length">Continue</v-btn>
          <v-btn color="primary" @click="completeQuiz" v-else>Complete</v-btn>

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
    <div class="timer text-center mt-5">
      <h6>{{ this.timer }}</h6>
    </div>

  </div>
</template>

<script>
export default {
  mounted () {
    this.leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || []
    this.startTime = new Date().getTime()
    this.intervalId = setInterval(this.pingTimer, 1000)
  },
  data () {
    return {
      leaderboard: [],
      currentStep: 1,
      startTime: '',
      timeTaken: '',
      timer: '',
      steps: [
        {
          id: 1,
          title: 'Which of these is not a Vue lifecycle hook?',
          options: ['created', 'beforeUpdate', 'mounted', 'afterUpdate'],
          img: '',
          correctOption: 3
        },
        {
          id: 2,
          title: 'Why should you not use v-if and v-for in the same element?',
          options: ['Because v-for will take priority over v-if', 'Because v-if will take priority over v-for'],
          correctOption: 0
        },
        {
          id: 3,
          title: 'Which of the following is not an array mutation method?',
          options: ['.pop()', '.push()', '.slice()', '.splice()'],
          correctOption: 2
        },
        {
          id: 4,
          title: 'How do you pass an attribute from a component to a sibling component?',
          options: ['Using props', 'Using $emit', 'Using $emit to the parent and props to the sibling', 'It is not possible to do that'],
          correctOption: 2
        },
        {
          id: 5,
          title: 'Is it possible to pass parameters to filters?',
          options: ['Yes', 'No'],
          correctOption: 0
        },
        {
          id: 6,
          title: 'Where is the correct place to directly update attributes in a vuex store?',
          options: ['Actions', 'Mutations', 'Setters', 'Delete the whole thing and use React instead'],
          correctOption: 1
        },
        {
          id: 7,
          title: 'Which attribute from the Vue model allows you to check if the code is running on the client or on the server?',
          options: ['$local', '$isClient', '$isServer', 'That is not possible'],
          correctOption: 2
        }
      ],
      selectedOptions: [-1, -1, -1, -1, -1, -1, -1],
      correctOptions: [3, 0, 2, 2, 0, 1, 2],
      showCompleteModal: false,
      name: '',
      email: '',
      web: ''
    }
  },
  methods: {
    fmtMSS (s) {
      return (s - (s %= 60)) / 60 + (s > 9 ? ':' : ':0') + s
    },
    pingTimer () {
      this.timer = this.fmtMSS(Math.round((new Date().getTime() - this.startTime) / 1000))
    },
    completeQuiz () {
      this.timeTaken = this.timer
      clearInterval(this.intervalId)
      this.showCompleteModal = true
    },
    submit () {
      let score = 0
      for (let i = 0; i < this.selectedOptions.length; i++) {
        if (this.selectedOptions[i] === this.correctOptions[i]) {
          score++
        }
      }
      this.leaderboard.push({
        score,
        name: this.name,
        time: this.timeTaken,
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

.timer{
  font-size: 5rem;
}

.question-title {
  font-size: 3rem;
}
.question-option {
  font-size: 2rem;
}
</style>
