<template>
    <h1>{{count}}</h1>

    <button @click="plus"> 增加 ++ </button>
</template>

<script>
import {reactive,ref,toRefs,watchEffect,watch,getCurrentInstance} from 'vue';
export default {
    name:'Test',
    props:{
        count:Number
    },
    setup(props){
        const {ctx} = getCurrentInstance();
        const  {utils} = ctx;

        console.log(utils.plus(1,2));
        /*
        const plus = ()=>{
            ctx.emit('plus',100)
        }
        return {
            plus
        }
        */
    }
}

</script>