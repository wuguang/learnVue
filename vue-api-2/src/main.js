import { createApp } from 'vue'
import App from './App.vue'
import utils from './utils/utils';
import MyUI  from '../libs/MyUI';

const app = createApp(App);
app.config.globalProperties.utils = utils;
app.use(MyUI,{
    components:['MyInput']
})

app.mount('#app')
