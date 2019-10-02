<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Rank',
            align: 'left',
            sortable: false,
            value: 'rank',
          },
          { text: 'Name', value: 'name' },
          { text: 'Time', value: 'time' },
          { text: 'Score', value: 'score' }
        ],
        desserts: [
          {
            rank: 1,
            name: 'John Snow',
            time: '4:47',
            score: 9
          },
          {
            rank: 2,
            name: 'Mike Wazowski',
            time: '5:00',
            score: 8
          },
          {
            rank: 3,
            name: 'Arnold Palmer',
            time: '3:47',
            score: 6
          },
          {
            rank: 4,
            name: 'Lewis Fast',
            time: '2:45',
            score: 8
          },
          {
            rank: 5,
            name: 'David M',
            time: '2:47',
            score: 4
          },
          {
            rank: 6,
            name: 'Qwerty',
            time: '2:47',
            score: 0
          }
        ],
      }
    },
  }
</script>
                        
<style lang='scss'>
                
</style>