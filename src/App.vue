<template>
  <v-app>
    <v-app-bar app
      color="#41B883">
      <v-toolbar-title class="headline text-uppercase">
        <span>Vue.js Quiz</span>
      </v-toolbar-title>
      <div class="flex-grow-1"></div>
      <router-link to="/" class="toolbar-link">Leaderboard</router-link>
      <router-link to="/newquiz" class="toolbar-link">New Quiz</router-link>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  })
}
</script>

<style>
  .vue-green {
    color: #41B883;
  }
  .vue-blue {
    color: #34495E;
  }
  .vue-white {
    color: #fff;
  }
  .toolbar-link {
    color: white !important;
    text-decoration: none;
    margin: 1rem;
    font-size: 1.3rem;
  }
</style>
