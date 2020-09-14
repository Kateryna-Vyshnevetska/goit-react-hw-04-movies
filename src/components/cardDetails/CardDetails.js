import React from "react";

export function CardDetails({
  poster_path,
  overview,
  original_title,
  genres,
  popularity,
}) {
  return (
    <>
      <div className="card">
        <div>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w300${poster_path}`
                : `https://medieval.gumlet.net/wp-content/uploads/2015/06/Norfolk-Graffiti-Project-Survey-6-300x415.jpg?compress=true&quality=80&w=320&dpr=2.6`
            }
            alt={original_title}
          />
        </div>
        <div>
          <h2>{original_title}</h2>
          <p>{Math.floor(popularity)}%</p>
          <h3>Overview</h3>
          <p className="overview">{overview}</p>
          <h3>Genres</h3>
          <ul>
            {genres.map((el) => (
              <li key={el.id}>{el.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
