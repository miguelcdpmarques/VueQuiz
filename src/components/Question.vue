<template>
  <div>
    <h2 class="question-title">{{ question.title }}</h2>
    <figure v-if="question.img">
      <img :src="question.img">
    </figure>
    <br />
    <div v-for="(option, i) in question.options" :key="option">
      <input type="radio" :id="i" class="mr-5 mb-5" name="question" />
      <label :for="i">{{ option }}</label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: Object,
    value: Number
  }
}
</script>

<style>
input[type=radio]{transform:scale(1.5);}
</style>
