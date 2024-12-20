import React from 'react'
import { AppBar, Toolbar, Button } from '@mui/material'
import { Link } from 'react-scroll'
import './Navbar.css'

export default class Navbar extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isScrolled: false }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll () {
    if (window.scrollY > 500) {
      this.setState({ isScrolled: true })
    } else {
      this.setState({ isScrolled: false })
    }
  }

  render () {
    return (
      <AppBar position="fixed" className={`navbar ${this.state.isScrolled ? 'scrolled' : 'notScrolled'}`}>
        <Toolbar className="menu-buttons">
          <div>
            <Button color="inherit" component={Link} to="inicio" smooth={true}>
              Início
            </Button>
            <Button color="inherit" component={Link} to="sobre" smooth={true}>
              Sobre
            </Button>
            <Button color="inherit" component={Link} to="projetos" smooth={true}>
              Projetos
            </Button>
            <Button color="inherit" component={Link} to="contato" smooth={true}>
              Contato
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}
