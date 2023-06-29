<template>
  <div class="hello">
    <h1>Count</h1>
    <h1> {{ currentCount }} </h1>
    <button @click="incrementCount">Increment</button>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
export default {
  name: 'HelloWorld',
  setup() {
    const state = reactive({
      currentCount: 12
    })

    const incrementCount = () => {
      state.currentCount++
    } 

    return {
      ...toRefs(state),
      incrementCount
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
