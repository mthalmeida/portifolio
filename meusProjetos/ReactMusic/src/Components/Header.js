import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import '../pages/styles/header.css';
import LogoImagem from '../pages/styles/logo512.png';

export default class Header extends Component {
  constructor() {
    super();

    this.state = { userName: {} };
  }

  async componentDidMount() {
    const userName = await getUser();
    this.setState({ userName });
  }

  render() {
    const { userName } = this.state;

    return (
      <header data-testid="header-component" className="Header">
        <img src={ LogoImagem } alt="Trybe Logo" />
        <section className="links">

          <NavLink
            className="btn-header"
            to="/search"
            data-testid="link-to-search"
          >
            Search
          </NavLink>

          <NavLink
            className="btn-header"
            to="/favorites"
            data-testid="link-to-favorites"
          >
            Favorites
          </NavLink>

          <NavLink
            className="btn-header"
            to="/profile"
            data-testid="link-to-profile"
          >
            Profile
          </NavLink>

        </section>
        <div data-testid="header-user-name" className="header-user-name">
          {userName.name ? userName.name
            : 'Carregando...'}
        </div>
      </header>
    );
  }
}
