<template>
  <div class="homePage">
    <p>ref watch 第 {{ year }} 年</p>

  </div>
</template>



<script>

import {defineComponent,watch,ref} from "vue";
export default defineComponent({
	setup(){
	
		const year = ref(0);

		setInterval(() => {
			year.value++;
		}, 1000);

		watch(year, (newVal, oldVal) => {
			console.log("新值:", newVal, "老值:", oldVal);
		});



		return {
			year
		}
	}
})


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
