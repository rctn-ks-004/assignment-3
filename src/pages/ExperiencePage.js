import React, { Component } from "react";
import {useLocation} from "react-router-dom"


export default function ExperiencePage() {
  const {pathname} = useLocation();
  // console.log(pathname)
  return (
    <div className="experience" id="experience">
        <h1>Experience</h1>
        <ul className="experience-list">
          <li>
            <div>
              <h2>Hacktiv8 MSIB</h2>
              <p>August 2022 - December 2022</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam,
              iste?
            </p>
          </li>
          <li>
            <div>
              <h2>GDSC ITB</h2>
              <p>September 2021 - August 2022</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam,
              iste?
            </p>
          </li>
          <li>
            <div>
              <h2>IT Support Part Timer</h2>
              <p>July 2020 - September 2021</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam,
              iste?
            </p>
          </li>
        </ul>
      </div>
  )
}

