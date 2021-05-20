import {createApp} from 'vue'
import App from './App.vue'
import { Button, Radio, Input, Slider } from 'ant-design-vue'
createApp(App)
  .use(Button)
  .use(Radio)
  .use(Input)
  .use(Slider)
  .mount('#app')