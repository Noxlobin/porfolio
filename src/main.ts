import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import TimestampLoader from 'vue-timestamp-loader'

const app = createApp(App)

app.use(router).use(TimestampLoader)

app.mount('#app')
