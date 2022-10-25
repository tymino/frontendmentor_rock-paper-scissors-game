<template>
  <img alt="Vue logo" src="./assets/images/bg-pentagon.svg" />

  <h1>{{ $store.state.counter }}</h1>
  <h3>{{ $store.getters.withText }}</h3>

  <br />
  <button @click="$store.commit('increment', 2)">+2</button>
  <button @click="$store.commit('increment', 1)">+1</button>
  <button @click="$store.commit('decrement', 1)">-1</button>
  <button @click="$store.commit('decrement', 2)">-2</button>
</template>

<script>
export default {
  name: 'App',
  components: {},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
