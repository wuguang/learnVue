<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Two />
  <Three />
</template>

<script>
import Two from './components/Two.vue'
import Three from './components/Three.vue'
export default {
  name: 'App',
  components: {
    Two,
    Three
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
