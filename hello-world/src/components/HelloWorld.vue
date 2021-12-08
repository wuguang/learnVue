<template>
  <div class="homePage">
    <p>第 {{ year }} 年</p>
    <p>姓名： {{ nickname }}</p>
    <p>年龄： {{ age }}</p>
  </div>
</template>



<script>
/*
import {defineComponent,reactive,ref,toRefs} from "vue";
export default defineComponent({
	setup(){
		const year = ref(0);
		const user = reactive({ nickname: "xiaofan", age: 26, gender: "女"})

		setInterval(() => {
			year.value++;
			user.age++;
		}, 1000);

		return {
			year,
			...toRefs(user)
		}
	}
})
*/
import { defineComponent, onBeforeMount, onMounted, onBeforeUpdate,onUpdated,
onBeforeUnmount, onUnmounted, onErrorCaptured, onRenderTracked,
onRenderTriggered } from "vue"; 

export default defineComponent({ 
	/*
	//beforeCreate和created是vue2的 
	beforeCreate() {
		console.log("------beforeCreate-----"); 
	}, 
	created() {
		console.log("------created-----"); 
	}, 
	

	setup() { console.log("------setup-----");

		// vue3.x生命周期写在setup中 onBeforeMount(() => {
		console.log("------onBeforeMount-----"); 
	}),

	onMounted(() => {
		console.log("------onMounted-----"); 
	}),
	
	// 调试哪些数据发生了变化
	onRenderTriggered((event) =>{ 
		console.log("------onRenderTriggered-----",event);
	})
	*/

});


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
