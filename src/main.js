import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './Router'
import './style.css'
import App from './App.vue'
import * as filters from './filters'

const app = createApp(App);
app.use(router).use(createPinia()).mount("#app");

app.config.globalProperties.$filters = filters
