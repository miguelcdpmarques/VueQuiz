<template>
  <div>
    <h2 class="question-title">{{ question.title }}</h2>
    <figure v-if="question.img">
      <img :src="question.img">
    </figure>
    <br />
    <div v-for="(option, i) in question.options" :key="option">
      <input type="radio" :id="i" class="mr-5 mb-5" name="question" v-model="value" />
      <label :for="i" class="question-option" style="font-size:2rem">{{ option }}</label>
    </div>
    Value: {{ value }}
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

.question-title {
  font-size: 3rem;
}

.question-option {
  font-size: 2rem;
}
</style>
