import { createRouter, createWebHistory } from "vue-router";
import axios from "@/config/axios/authAxios.js";
import { useAuthStore } from "@/stores/useAuthStore";

import landingView from "@/views/landingView/IndexView.vue";

import NewsFeedView from "@/views/newsFeedView/IndexView.vue";
import AddQuteView from "@/views/newsFeedView/addQuoteView/IndexView.vue";

import MoviesView from "@/views/moviesView/IndexView.vue";
import AddMovieView from "@/views/moviesView/addMovieView/IndexView.vue";
import AllMoviesView from "@/views/moviesView/allMoviesView/IndexView.vue";
import MovieView from "@/views/moviesView/movieView/IndexView.vue";
import EditMovieView from "@/views/moviesView/movieView/editMovie/IndexView.vue";
import DeleteMovieView from "@/views/moviesView/movieView/deleteMovie/IndexView.vue";

import GoogleRedirect from "@/views/redirectView/GoogleRedirectView.vue";
import { isAuthenticated } from "@/router/guards.js";

import RegistrationView from "@/views/landingView/registrationView/IndexView.vue";
import VerificationView from "@/views/landingView/verificationView/IndexView.vue";

import LoginView from "@/views/landingView/loginView/IndexView.vue";
import ForgetPasswordView from "@/views/landingView/forgetPasswordView/IndexView.vue";
import ResetPasswordView from "@/views/landingView/resetPasswordView/IndexView.vue";

axios.defaults.withCreadentials = true;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing",
      component: landingView,
      beforeEnter: (_, _2, next) => {
        return isAuthenticated() ? next({ name: "news-feed" }) : next();
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
          // beforeEnter: (to, _2, next) => {
          //   if (!to.query.reset_token) return next({ name: "landing" });
          //   return next();
          // },
        },
        {
          name: "verify",
          path: "verify",
          component: VerificationView,
          // beforeEnter: (to, _2, next) => {
          //   if (!to.query.token) return next({ name: "landing" });
          //   return next();
          // },
        },
      ],
    },

    {
      path: "/news-feed",
      name: "news-feed",
      component: NewsFeedView,
      // beforeEnter: (_, _2, next) => {
      //   return isAuthenticated() ? next() : next({ name: "landing" });
      // },
      beforeEnter: isAuthenticated,
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
      redirect: { name: "all-movies" },
      component: MoviesView,
      // beforeEnter: (_, _2, next) => {
      //   return isAuthenticated() ? next() : next({ name: "landing" });
      // },

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
          children: [
            {
              path: "add-quote",
              name: "add-movie-quote",
              component: AddQuteView,
            },
            {
              path: "edit-movie",
              name: "edit-movie",
              component: EditMovieView,
            },
            {
              path: "delete-movie",
              name: "delete-movie",
              component: DeleteMovieView,
            },
          ],
        },
      ],
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: landingView },
    { path: "/google-redirect", name: "redirect", component: GoogleRedirect },
  ],
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();

  if (authStore.authenticated === null) {
    try {
      await axios.get(`${import.meta.env.VITE_API_BASE_URL}me`);
      authStore.authenticated = true;
    } catch (err) {
      authStore.authenticated = false;
    }
  }
  return next();
});

export default router;
