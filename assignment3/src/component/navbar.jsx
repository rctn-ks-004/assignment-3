import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div class="header">
      <Link to="/">
        <h1 class="left">AZ</h1>
      </Link>

      <ul>
        <li>
          <Link to="/temp">Home</Link>
        </li>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
        <li>
          <NavLink to="exper">Experiences</NavLink>
        </li>
        <li>
          <NavLink to="skill">Skills</NavLink>
        </li>
        <li>
          <NavLink to="interest">Interest</NavLink>
        </li>
        <li>
          <NavLink to="awward">Awwards</NavLink>
        </li>
      </ul>
    </div>
  );
};
