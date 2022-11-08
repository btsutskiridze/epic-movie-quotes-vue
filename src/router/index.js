import { createRouter, createWebHistory } from "vue-router";
import landingView from "@/views/landingView/IndexView.vue";
import newsFeed from "@/views/newsFeedView/IndexView.vue";
import GoogleRedirect from "@/views/redirectView/GoogleRedirectView.vue";
import { isAuthenticated } from "@/router/guards.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: landingView,
      beforeEnter: (_, _2, next) => {
        return !isAuthenticated() ? next() : next({ name: "news-feed" });
      },
    },
    {
      path: "/news-feed",
      name: "news-feed",
      component: newsFeed,
      beforeEnter: (_, from, next) => {
        return isAuthenticated() ? next() : next({ name: "home" });
      },
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: landingView },
    { path: "/google-redirect", name: "redirect", component: GoogleRedirect },
  ],
});

export default router;
