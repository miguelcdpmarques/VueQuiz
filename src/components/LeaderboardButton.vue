<template>
  <div class="text-center mt-5 mb-5">
    <v-btn class="game-button">
        <router-link to="/newquiz" class="game-text">Start Quiz</router-link>
    </v-btn>
  </div>
</template>
                
<script>
export default {

}
</script>
                        
<style lang='scss'>
.game {
    &-button {
        background-color: #41B883 !important;
    }
    &-text {
        color: white !important;
        text-decoration: none;
    }
}        
</style>