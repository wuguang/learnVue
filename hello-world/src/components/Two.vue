<template>
  <div class="homePage">
    <p>第 {{ age }} 年</p>
    <p>姓名： {{ nickname }}</p>
    <p>年龄： {{ age }}</p>
  </div>
</template>


<script>

import {defineComponent,reactive,toRefs,watch} from "vue";
export default defineComponent({
	setup(){
	
		const state = reactive({ nickname: "xiaofan", age: 26})

		setInterval(() => {
			state.age++;
		}, 1000);

		watch(
			state.age,
			(curAge,preAge)=>{
				console.log(`newValue = ${curAge}----oldValue = ${preAge}`);
			}
		)

		return {
			...toRefs(state)
		}
	}
})


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
