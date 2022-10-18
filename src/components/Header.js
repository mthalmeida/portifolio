import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <header class="header">
        <div class="logo-container">
          <h1 id="title">Matheus Almeida</h1>
          <span class="toggle-btn">&#9776;</span>
        </div>
        <ul class="display-none-mobile">
          <li>
            <a href="#Início">Início</a>
          </li>
          <li>
            <a href="#Sobre">Sobre</a>
          </li>
          <li>
            <a href="#Projetos">Projetos</a>
          </li>
          <li>
            <a href="#Metricas">Metricas</a>
          </li>
          <li>
            <a href="#Contatos">Contatos</a>
          </li>
        </ul>
        
      </header>
    );
  }
}
