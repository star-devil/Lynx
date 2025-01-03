/*
 * @Author: wangqiaoling
 * @LastEditors: wangqiaoling
 * @Description:
 */
import { createApp } from 'vue';
import App from './App.vue';
import './tailwind.css';
import pinia from './stores';
import { setupRouter } from './router';

const app = createApp(App);
app.use(pinia);
setupRouter(app);

app.mount('#app');
