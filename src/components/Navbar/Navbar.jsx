import React from 'react'
import { Link } from 'react-router-dom'
import photo from '../../assets/foto.png'
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className="nav-photo">
        <Link to="/">
          <img src={photo} alt="foto" />
        </ Link>
      </div>
      <div className="nav-item">
        <Link to="/about">About</Link>
      </div>
      <div className="nav-item">
        <Link to="/education">Education</Link>
      </div>
      <div className="nav-item">
        <Link to="/experience">Experience</Link>
      </div>
      <div className="nav-item">
        <Link to="/skills">Skills</Link>
      </div>
      <div className="nav-item">
        <Link to="/interest">Interest</Link>
      </div>
      <div className="nav-item">
        <Link to="/awards">Awards</Link>
      </div>
    </nav>
  )
}

export default Navbar