import { createApp } from 'vue'
import App from './App.vue'

import store from './store/index.js'

import './assets/styles/style.scss'
import './assets/fonts/stylesheet.css'

createApp(App).use(store).mount('#app')
