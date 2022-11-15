import { createRouter, createWebHistory } from "vue-router";
import landingView from "@/views/landingView/IndexView.vue";

import NewsFeedView from "@/views/newsFeedView/IndexView.vue";
import AddQuteView from "@/views/newsFeedView/addQuoteView/IndexView.vue";

import MoviesListView from "@/views/moviesListView/IndexView.vue";
import AddMovieView from "@/views/moviesListView/addMovieView/IndexView.vue";

import GoogleRedirect from "@/views/redirectView/GoogleRedirectView.vue";
import { isAuthenticated } from "@/router/guards.js";

import RegistrationView from "@/views/landingView/registrationView/IndexView.vue";
import VerificationView from "@/views/landingView/verificationView/IndexView.vue";

import LoginView from "@/views/landingView/loginView/IndexView.vue";
import ForgetPasswordView from "@/views/landingView/forgetPasswordView/IndexView.vue";
import ResetPasswordView from "@/views/landingView/resetPasswordView/IndexView.vue";

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
      children: [
        {
          path: "registration",
          component: RegistrationView,
        },
        {
          path: "login",
          component: LoginView,
        },
        {
          path: "forget-password",
          component: ForgetPasswordView,
        },
        {
          path: "reset-password",
          component: ResetPasswordView,
          beforeEnter: (to, _2, next) => {
            if (!to.query.reset_token) return next({ name: "home" });
            return next();
          },
        },
        {
          path: "verify",
          component: VerificationView,
          beforeEnter: (to, _2, next) => {
            if (!to.query.token) return next({ name: "home" });
            return next();
          },
        },
      ],
    },
    {
      path: "/news-feed",
      name: "news-feed",
      component: NewsFeedView,
      beforeEnter: (_, _2, next) => {
        return isAuthenticated() ? next() : next({ name: "home" });
      },
      children: [
        {
          path: "add-quote",
          name: "add-quote",
          component: AddQuteView,
        },
      ],
    },
    {
      path: "/movies-list",
      name: "movies-list",
      component: MoviesListView,
      beforeEnter: (_, _2, next) => {
        return isAuthenticated() ? next() : next({ name: "home" });
      },
      children: [
        {
          path: "add-movie",
          name: "add-movie",
          component: AddMovieView,
        },
      ],
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: landingView },
    { path: "/google-redirect", name: "redirect", component: GoogleRedirect },
  ],
});

export default router;
