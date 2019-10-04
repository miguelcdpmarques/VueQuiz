<template>
  <v-data-table
    :headers="headers"
    :items="leaderboard"
    :items-per-page="5"
    class="elevation-1"
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
      leaderboard: [],
    }
  }
}
</script>

<style lang='scss'>

</style>
