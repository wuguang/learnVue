<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>
	<h1>hello world~~~</h1>

  </div>
</template>

<script>
import {reactive,ref,toRefs,watchEffect,computed} from 'vue';
import Test from './components/Test.vue';
export default {
	name: 'App',
	components: {
		Test
	},
	emits:['plus'],
	setup(props,ctx){

		

		const count = ref(0);

		setTimeout(()=>{
			count.value = 1;
		},700);

		setTimeout(()=>{
			count.value = 2;
		},1500);

		const stop = watchEffect((onInvalidate)=>{
			console.log(count.value);

			onInvalidate(()=>{
				console.log(`onInvalidate is triggered`);
			})
		});

		setTimeout(()=>{
			stop();
			console.log('watchEffect is stopped');
		},2000);

		
		

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
