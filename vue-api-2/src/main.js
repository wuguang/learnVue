import { createApp } from 'vue'
import App from './App.vue'
import utils from './utils/utils';

const app = createApp(App);
app.config.globalProperties.utils = utils;

app.mount('#app')
