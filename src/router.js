import Vue from 'vue'
import Router from 'vue-router'
import Leaderboard from './views/Leaderboard.vue'
import NewQuiz from './views/NewQuiz.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'leaderboard',
      component: Leaderboard
    },
    {
      path: '/newquiz',
      name: 'newquiz',
      component: NewQuiz
    }
  ]
})
