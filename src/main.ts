import { createApp } from 'vue'
import router from './router'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

// createApp(App).mount('#app')
const pinia = createPinia()

const app = createApp(App)


app.use(router)
app.use(pinia)
app.mount('#app')
