import { createApp } from "vue";
import App from "@/App.vue";
import i18n from "@/i18n";
import router from "@/router";
import store from "@/stores";
import BaseButton from "@/components/UI/form/BaseButton.vue";
// import BaseTextarea from "@/components/UI/news-feed/post/BaseTextarea.vue";
import BaseInput from "@/components/UI/form/BaseInput.vue";
import BaseDialog from "@/components/UI/BaseDialog.vue";
import NewsFeedDialog from "@/components/UI/news-feed/BaseDialog.vue";
import LoadingCircle from "@/components/LoadingCircle.vue";

import "@/index.css";

import "@/config/vee-validate/rules";
import "@/config/vee-validate/messages";

const app = createApp(App);

app.component("BaseButton", BaseButton);
// app.component("BaseTextarea", BaseTextarea);
app.component("BaseInput", BaseInput);
app.component("BaseDialog", BaseDialog);
app.component("LoadingCircle", LoadingCircle);
app.component("NewsFeedDialog", NewsFeedDialog);

app.use(store);
app.use(router);
app.use(i18n);
app.mount("#app");
