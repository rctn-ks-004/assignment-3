import React from "react";
import { Link } from "react-router-dom";
import pic from "../../assets/orias-hacktiv.jpeg";
import { useLocation } from "react-router-dom";

export default function NavBar() {

  const {pathname} = useLocation()

  return (
    <nav>
        <div className="img">
          <Link to={"/"}>
            <img src={pic} alt="" />
          </Link>
        </div>
        <ul className="nav-link">
          <li className={`${pathname === "/about" ? "active" : ""}`}>
            <Link to={"/about"}>
              About
            </Link>
          </li>
          <li className={`${pathname === "/experience" ? "active" : ""}`}>
            <Link to={"/experience"}>
              Experience
            </Link>
          </li>
          <li className={`${pathname === "/education" ? "active" : ""}`}>
            <Link to={"/education"}>
              Education
            </Link>
          </li>
          <li className={`${pathname === "/skills" ? "active" : ""}`}>
            <Link to={"/skills"}>
              Skills
            </Link>
          </li>
          <li className={`${pathname === "/interest" ? "active" : ""}`}>
            <Link to={"/interest"}>
              Interests
            </Link>
          </li>

          <li className={`${pathname === "/awards" ? "active" : ""}`}>
            <Link to={"/awards"}>
              Awards
            </Link>
          </li>
        </ul>
      </nav>
  )
}

