import { createApp } from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import router from './router.js'
import AntDesign from 'ant-design-vue'

createApp(App)
  .use(router)
  .use(AntDesign)
  .mount('#app')
