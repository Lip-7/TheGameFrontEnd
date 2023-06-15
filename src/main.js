import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

import './assets/styles/main.scss'
import router from './router'

const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')
