import { lazy } from "react";

export default [
  {
    path: "/",
    name: "Home",
    exact: true,
    component: lazy(() => import("./pages/homePage/HomePage")),
  },
  {
    path: "/movies/:movieId",
    name: "MovieDetails",
    exact: false,
    component: lazy(() => import("./pages/movieDetailsPage/MovieDetailsPage")),
  },
  {
    path: "/movies",
    name: "Movies",
    exact: false,
    component: lazy(() => import("./pages/moviesPage/MoviesPage")),
  },
];
