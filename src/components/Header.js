import React from "react";
import "./Header.css";

export default class Header extends React.Component {
  render() {
    return (
      <div>

  <div className="menu-wrap">
    <input type="checkbox" className="toggler"/>
    <div className="hamburger"><div></div></div>
    <div className="menu">
      <div>
        <div>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#metricas">Metricas</a></li>
          </ul>
        </div>

      </div>
    </div>
  </div>

  <header className="showcase">
    <div className="container showcase-inner">
      <h1>Desenvolvimento Full Stack</h1>
    </div>
  </header>
    
      </div>
      

    );
  }
}
