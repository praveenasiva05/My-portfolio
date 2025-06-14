import React from 'react'
import { Link } from 'react-scroll'
import './Header.css'
const Header = () => {
  return (
    <div className="Header">
      <div className="Header__left">
        <h2>
          My Portfol<span>io</span>
        </h2>
      </div>
      <div className="Header__right">
        <Link to="Home" smooth={true} duration={500} offset={-70}>
          <h2>Home</h2>
        </Link>
        <Link to="About" smooth={true} duration={500} offset={-70}>
          <h2>About Me</h2>
        </Link>
        <Link to="Projects" smooth={true} duration={500} offset={-70}>
          <h2>Projects</h2>
        </Link>
        <Link to="Contact" smooth={true} duration={500} offset={-70}>
          <h2>Contact</h2>
        </Link>
        
      </div>
    </div>
  )
}

export default Header

