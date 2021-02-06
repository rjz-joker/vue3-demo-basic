import { createApp } from 'vue'
// TypeScript error? Run VSCode command
// TypeScript: Select TypeScript version - > Use Workspace Version
import 'lib-flexible/flexible.js'
import App from './App.vue'
import router from './router/index'
import requests from './config/index'
import store from './store/index'

const app = createApp(App)
app._props = requests
app.use(router)
app.use(store)
app.mount('#app')



