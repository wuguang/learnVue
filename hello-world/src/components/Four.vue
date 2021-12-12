<template>
  <div> 
    <span>{{item.title}}</span>
		<button  @click="remove(item.id)"> delete </button>
  </div>
</template>

<script>
import {onBeforeUnmount,onUnmounted} from "vue";
export default {
  name:'Four',
  props:{
    item:Object
  },
  emits:['remove'],

  setup(props,ctx) {
      const remove = (id)=>{
        ctx.emit('remove',id);
      }

      onBeforeUnmount(()=>{

        console.log(`onBeforeUnmount`);
      })

      onUnmounted(()=>{

        console.log(`onUnmounted`);
      })

      return {
        remove
      }
  }
}

</script>
