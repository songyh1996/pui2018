import React from 'react'
import { Link } from 'gatsby'
import './header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll',
    this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    }
    else {
      this.setState({ hasScrolled: false })
    }
  }


  render() {
    return (
      <div className={this.state.hasScrolled ?
      'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <div id="logo">
            <Link to="/">ANTONIO SONG</Link>
          </div>
          <div className="right-nav">
            <Link className="menu" to="/about">ABOUT ME</Link>
            <a className="menu" href="https://drive.google.com/file/d/1XoP196JAtrizw-0ZUY4tJRdVMDNstrlU/view" target="_blank" rel="noopener noreferrer">RÉSUMÉ</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Header


