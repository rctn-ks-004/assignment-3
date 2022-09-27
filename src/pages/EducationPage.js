import React, { Component } from 'react'

export default class EducationPage extends Component {
  render() {
    return (
        <div className="education">
        <h1>Education</h1>
        <ul className="education-list">
          <li>
            <div>
              <h2>SMAN2 Tanjungpinang</h2>
              <p>August 2017 - April 2020</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam,
              iste?
            </p>
          </li>
          <li>
            <div>
              <h2>Universitas Maritim Raja Ali Haji</h2>
              <p>September 2020 - Now</p>
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
}
