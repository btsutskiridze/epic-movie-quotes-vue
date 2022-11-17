import { createRouter, createWebHistory } from "vue-router";
import landingView from "@/views/landingView/IndexView.vue";

import NewsFeedView from "@/views/newsFeedView/IndexView.vue";
import AddQuteView from "@/views/newsFeedView/addQuoteView/IndexView.vue";

import MoviesView from "@/views/moviesView/IndexView.vue";
import AddMovieView from "@/views/moviesView/addMovieView/IndexView.vue";
import AllMoviesView from "@/views/moviesView/allMoviesView/IndexView.vue";
import MovieView from "@/views/moviesView/movieView/IndexView.vue";

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
          name: "registration",
          path: "registration",
          component: RegistrationView,
        },
        {
          name: "login",
          path: "login",
          component: LoginView,
        },
        {
          name: "forget-password",
          path: "forget-password",
          component: ForgetPasswordView,
        },
        {
          name: "reset-password",
          path: "reset-password",
          component: ResetPasswordView,
          beforeEnter: (to, _2, next) => {
            if (!to.query.reset_token) return next({ name: "home" });
            return next();
          },
        },
        {
          name: "verify",
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
      path: "/movies",
      name: "movies",
      component: MoviesView,
      beforeEnter: (_, _2, next) => {
        return isAuthenticated() ? next() : next({ name: "home" });
      },

      children: [
        {
          path: "all-movies",
          name: "all-movies",
          component: AllMoviesView,
        },
        {
          path: "add-movie",
          name: "add-movie",
          component: AddMovieView,
        },
        {
          path: ":id",
          name: "movie",
          component: MovieView,
        },
      ],
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: landingView },
    { path: "/google-redirect", name: "redirect", component: GoogleRedirect },
  ],
});

export default router;
