import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "@/App.vue";
import i18n from "@/i18n";
import router from "@/router";
import "@/index.css";

import "@/config/vee-validate/rules";
import "@/config/vee-validate/messages";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);
app.mount("#app");
