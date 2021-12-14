import MyButton from './MyButton.vue';
import MyInput from './MyInput.vue';

let pool = [
    MyButton,MyInput
]

export default {
    install(app,options){
        if(options.components){
            options.components.map((name)=>{
                pool.map((comp)=>{
                   if(name === comp.name){
                        app.component(name,comp);
                   }
                })
            })
        }else{
            pool.map((comp)=>{
                app.component(comp.name,comp)
            })
        }
        
    }
}