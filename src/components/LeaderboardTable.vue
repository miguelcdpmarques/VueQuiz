<template>
  <v-data-table dark
    :headers="headers"
    :items="leaderboard"
    :items-per-page="5"
    class="elevation-1 mt-5"
  ></v-data-table>
</template>

<script>
export default {
  mounted () {
    this.leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || []
  },
  data () {
    return {
      headers: [
        { text: 'Score', value: 'score' },
        { text: 'Name', value: 'name' },
        { text: 'Time', value: 'time' }
      ],
      leaderboard: []
    }
  }
}
</script>

<style lang='scss'>
.v-data-table td,
.v-data-table th {
  font-size: 2rem !important;
}
</style>
