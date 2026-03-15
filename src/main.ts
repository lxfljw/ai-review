import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
const a = 4;
a.t = 55;
const app = createApp(App);
app.use(router);
app.mount("#app");
