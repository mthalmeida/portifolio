import React from 'react'
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-scroll'
import './Navbar.css'

export default class Navbar extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isDrawerOpen: false }
    this.toggleDrawer = this.toggleDrawer.bind(this)
  }

  toggleDrawer (open) {
    this.setState({ isDrawerOpen: open })
  }

  render () {
    const menuItems = [
      { text: 'Início', to: 'inicio' },
      { text: 'Sobre', to: 'sobre' },
      { text: 'Projetos', to: 'projetos' },
      { text: 'Contato', to: 'contato' }
    ]

    return (
      <>
        <AppBar
          position="fixed"
          className="menu-topo"
          sx={{ display: { xs: 'none', md: 'flex' } }}
        >
          <Toolbar sx={{ justifyContent: 'flex-end' }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                component={Link}
                to={item.to}
                smooth={true}
              >
                {item.text}
              </Button>
            ))}
          </Toolbar>
        </AppBar>

        <IconButton
          color="inherit"
          className="menu-icon-circular"
          onClick={() => this.toggleDrawer(true)}
          sx={{
            position: 'fixed',
            top: 16,
            right: 16,
            display: { xs: 'flex', md: 'none' },
            backgroundColor: '#ffffff',
            borderRadius: '50%',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            padding: '8px'
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          anchor="right"
          open={this.state.isDrawerOpen}
          onClose={() => this.toggleDrawer(false)}
          classes={{ paper: 'drawer-paper-custom' }}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.text}
                onClick={() => this.toggleDrawer(false)}
                component={Link}
                to={item.to}
                smooth={true}
              >
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </>
    )
  }
}
