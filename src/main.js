import './assets/main.css'
//in your `main.js` file
import '../node_modules/flowbite-vue/dist/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
