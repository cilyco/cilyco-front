import { createApp } from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import router from './router.js'
import AntDesign from 'ant-design-vue'
import { createPinia } from 'pinia'

createApp(App)
  .use(createPinia())
  .use(router)
  .use(AntDesign)
  .mount('#app')
