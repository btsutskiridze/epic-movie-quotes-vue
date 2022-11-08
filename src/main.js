import { createApp } from "vue";
import App from "@/App.vue";
import i18n from "@/i18n";
import router from "@/router";
import store from "@/stores";
import "@/index.css";

import "@/config/vee-validate/rules";
import "@/config/vee-validate/messages";

const app = createApp(App);

app.use(store);
app.use(router);
app.use(i18n);
app.mount("#app");
