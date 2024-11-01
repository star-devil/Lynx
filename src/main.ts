import { createApp } from "vue";
import App from "./App.vue";
import "./style.scss";
// tailwind样式
import "./styles/tailwind.css";

// routes
import router from "./router/index";
// pinia
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();
app.use(router).use(pinia);
app.mount("#app");
