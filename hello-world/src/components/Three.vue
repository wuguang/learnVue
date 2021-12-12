<template>
  <div class="homePage">
    <p>ref watch 第 {{ year }} 年</p>

  </div>
</template>



<script>
import { defineComponent, ref, reactive, toRefs, watchEffect } from "vue";
export default defineComponent({
  setup() {
    const state = reactive({ nickname: "xiaofan", age: 20 });
    let year = ref(0)

    setInterval(() =>{
        state.age++
        year.value++
    },1000)

    watchEffect(() => {
        console.log(state);
        console.log(year);
      }
    );

    return {
        ...toRefs(state)
    }
  },
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
