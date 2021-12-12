<template>
    <button class="my-button"> <slot></slot></button>
</template>

<script>
import {reactive,ref,toRefs,watchEffect,watch,getCurrentInstance} from 'vue';
export default {
    name:'MyButton',
    
}

</script>

<style>
.my-button{
    background-color:orange;
    color:#fff;
}
</style>