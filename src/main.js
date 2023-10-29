import { createApp } from 'vue'
import App from './App.vue'

import { createHead } from '@vueuse/head'
import MasonryWall from '@yeger/vue-masonry-wall'
import store from './store/index.js'
import router from './router/index.js'

import './assets/styles/style.scss'
import './assets/fonts/stylesheet.css'

createApp(App).use(createHead()).use(MasonryWall).use(store).use(router).mount('#app')
