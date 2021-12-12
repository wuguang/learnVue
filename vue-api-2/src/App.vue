<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Test :count="count" @plus="plus"/>
</template>

<script>
import {reactive,ref,toRefs} from 'vue';
import Test from './components/Test.vue';
export default {
	name: 'App',
	components: {
		Test
	},
	emits:['plus'],
	setup(props,ctx){

		const count = ref(0);
		const plus = (num)=>{
			count.value += num;
		}

		return {
			count,
			plus
		}

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
