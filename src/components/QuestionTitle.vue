<template>
  <div>
    <h2 class="question-title">{{ title }}</h2>
  </div>
</template>
                
<script>
export default {
    props: ['title']
}
</script>
                        
<style lang='scss'>
.question {
    &-title {
        font-weight: normal !important;
    }
}          
</style>