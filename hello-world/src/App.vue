<template>
  <div>
    <div id="app"></div>
    <div id="dialog"></div>
  </div>
</template>

<script>
import Four from './components/Four.vue'
export default {
  name: 'App',
  components: {
    Four
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
