<template>
  <div class="hello">
    <h1>Count 2</h1>
    <h1>{{ currentCount }}</h1>
    <button @click="incrementCount">Increment</button>
  </div>
</template>

<script>
import { useCounter } from "./composables/useCounter";

export default {
  name: 'HelloWorld2',
  setup() {
   const { currentCount } = useCounter()

    const incrementCount = () => {
      currentCount.value += 2
    }

    return {
      incrementCount,
      currentCount
    };
  }
}
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
