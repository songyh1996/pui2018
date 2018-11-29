import React from 'react'
import { Link } from 'gatsby'
import './header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <div id="logo">
        <Link to="/">ANTONIO SONG</Link>
      </div>
      <div className="right-nav">
        <Link className="menu" to="/about">ABOUT ME</Link>
        <Link className="menu" to="https://drive.google.com/file/d/1XoP196JAtrizw-0ZUY4tJRdVMDNstrlU/view">RÉSUMÉ</Link>
      </div>
    </div>
  </div>
)

export default Header
