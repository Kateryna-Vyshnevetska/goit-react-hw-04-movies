import React from "react";
import { MoviesListCard } from "../ui/moviesListCard";
import { Link, useLocation } from "react-router-dom";

export function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <>
      <ul className="ImageGallery">
        {movies.map((el) => {
          return (
            <li key={el.id}>
              <Link
                to={{
                  pathname: `movies/${el.id}`,
                  state: {
                    from: location.pathname,
                    query: location.search,
                  },
                }}
              >
                <MoviesListCard {...el} />
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
