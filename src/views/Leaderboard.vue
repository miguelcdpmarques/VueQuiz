<template>
  <div class="leaderboard">
    <v-container>
        <LeaderboardHeader></LeaderboardHeader>
        <LeaderboardButton></LeaderboardButton>
        <leaderboard-table></leaderboard-table>
    </v-container>
  </div>
</template>

<script>
import LeaderboardButton from '../components/LeaderboardButton.vue'
import LeaderboardHeader from '../components/LeaderboardHeader.vue'
import LeaderboardTable from '../components/LeaderboardTable.vue'

export default {
  components: {
    LeaderboardHeader,
    LeaderboardButton,
    LeaderboardTable
  }
}
</script>
