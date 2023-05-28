import './assets/css/style.css'
import { createApp } from 'vue'
import routes from '~pages'
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router'

const app = createApp(App)

app.use(
    createRouter({
      history: createWebHistory(),
      routes
    })
  )

app.mount('#app')

