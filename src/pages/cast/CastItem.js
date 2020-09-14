import React from "react";

const CastItem = ({ character, name, profile_path }) => {
  return (
    <>
      <li className="castItem">
        <div>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w300${profile_path}`
                : `https://medieval.gumlet.net/wp-content/uploads/2015/06/Norfolk-Graffiti-Project-Survey-6-300x415.jpg?compress=true&quality=80&w=320&dpr=2.6`
            }
            alt={name}
          />
        </div>
        <div className="castDescr">
          <h2>Name: {name}</h2>
          <p>Character: {character}</p>
        </div>
      </li>
    </>
  );
};

export default CastItem;
