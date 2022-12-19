import {Link} from 'react-router-dom'
import React from 'react'

export default function Navigation() {
  return (
        <nav className="Navbar">
            <img src='/Nifia.png' className='MyProfile'/>
            <Link to='/'>Home</Link> <br/> {' '}
            <Link to='about'>About</Link> <br/> {' '}
            <Link to='experience'>Experience</Link> <br/> {' '}
            <Link to="skills">Skills</Link> <br/> {' '}
            <Link to="interest">Interest</Link> <br/> {' '}
            <Link to="awards">Awards</Link>
        </nav>
  )
}
