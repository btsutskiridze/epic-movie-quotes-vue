import { createApp, watchEffect } from "vue";
import Echo from "laravel-echo";
import Pusher from "pusher-js";
import App from "@/App.vue";
import i18n from "@/i18n";
import router from "@/router";
import store from "@/stores";
import BaseButton from "@/components/UI/form/BaseButton.vue";
import BaseInput from "@/components/UI/form/BaseInput.vue";
import BaseDialog from "@/components/UI/BaseDialog.vue";
import NewsFeedDialog from "@/components/UI/news-feed/BaseDialog.vue";
import LoadingCircle from "@/components/LoadingCircle.vue";
import { isAuthenticated } from "@/router/guards.js";
import axios from "@/config/axios/authAxios.js";
import "@/index.css";

import "@/config/vee-validate/rules";
import "@/config/vee-validate/messages";

window.Pusher = Pusher;

watchEffect(() => {
  if (isAuthenticated) {
    window.Echo = new Echo({
      broadcaster: "pusher",
      key: import.meta.env.VITE_PUSHER_APP_KEY,
      cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
      withCredentials: true,
      encrypted: true,
      forceTLS: true,

      disableStats: true,
      authorizer: (channel) => {
        return {
          authorize: (socketId, callback) => {
            axios
              .post("/broadcasting/auth", {
                socket_id: socketId,
                channel_name: channel.name,
              })
              .then((response) => {
                callback(false, response.data);
              })
              .catch((error) => {
                callback(true, error);
              });
          },
        };
      },
    });
  }
});

const app = createApp(App);

app.component("BaseButton", BaseButton);
app.component("BaseInput", BaseInput);
app.component("BaseDialog", BaseDialog);
app.component("LoadingCircle", LoadingCircle);
app.component("NewsFeedDialog", NewsFeedDialog);
app.use(store);
app.use(router);
app.use(i18n);
app.mount("#app");
