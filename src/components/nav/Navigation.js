import React from "react";
import { NavLink } from "react-router-dom";
import "../../index.css";
export function Navigation() {
  return (
    <header>
      <nav className="nav">
        <NavLink exact to="/" className="NavLink" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/movies" className="NavLink" activeClassName="active">
          Movies
        </NavLink>
      </nav>
    </header>
  );
}
