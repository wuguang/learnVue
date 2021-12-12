<template>
  <div>
    <Four  v-for = "(item,index) of data" :key="index" :item = "item" @remove ="remove" />

  </div>
 
</template>

<script>
import {
	onMounted,
	onBeforeMount,
	onBeforeUpdate,
	onUpdated,
	watchEffect,
	ref,

} from 'vue';
import Four from './components/Four.vue'
export default {
	name: 'App',
	components: {
		Four,
	},
	setup(){

		const count = ref(0);
		const data = ref([{
			id:'1',
			title:'will-wu'
		},{
			id:'2',
			title:'will--222'
		}]);
		console.log('setup');

		setTimeout(()=>{
			count.value = 1;
		},2000)

		onBeforeMount(()=>{
			console.log(`onBeforeMount`);
		});

		onMounted(()=>{
			console.log('mounted');
		})

		onBeforeUpdate(()=>{
			console.log(`onBeforeMount`);
		});

		onUpdated(()=>{
			console.log('onUpdate');
		});

		watchEffect(()=>{
			console.log(`watchEffect--${count.value}`);
		},{
			flush:'post'
		})

		const remove = (id)=>{
			console.log(`id = ${id}`);
			data.value = data.value.filter(item=>item.id !== id);
		}

		return {
			count,
			data,
			remove
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
