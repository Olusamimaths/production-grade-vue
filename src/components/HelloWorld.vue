<template>
  <div class="hello">
    <h1>Count</h1>
    <h2>Change Amount {{ changeAmount }}</h2>
    <h2>Count: {{ currentCount }}</h2>
    <input type="number" v-model.number="changeAmount" />
    <button @click="incrementCount">Increment</button>
  </div>
</template>

<script>
import { ref } from "vue";
import { useCounter } from "./composables/useCounter";

export default {
  name: "HelloWorld",
  setup() {
    const { currentCount } = useCounter();

    const changeAmount = ref(1);

    const incrementCount = () => {
      currentCount.value += changeAmount.value;
    };  
    return {
      currentCount,
      changeAmount,
      incrementCount
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
