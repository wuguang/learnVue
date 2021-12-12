<template>
  <div> 
    <p>count: {{ count }}</p>
    <p>倍数： {{ multiple }}</p>
    <div>
      <button @click="increase()">加1</button>
      <button @click="decrease()">减一</button>
    </div>
  </div>
</template>

<script>
import useCount from '../hooks/useCount.ts'
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    const { count, multiple, increase, decrease } = useCount(10);
	return {
		count,
		multiple,
		increase,
		decrease,
	};
  }
});

</script>
