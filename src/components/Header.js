import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <header class="header">
        <nav class="navbar navbar-dark fixed-top ">

          <div class="container-fluid">
            <h1 id="title">Matheus Almeida</h1>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
              <div class="offcanvas-header">
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">

                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                  
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#Início">Início</a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="#Sobre">Sobre</a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="#Projetos">Projetos</a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="#Metricas">Metricas</a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="#Contatos">Contatos</a>
                  </li>

                </ul>

              </div>
            </div>
          </div>

        </nav>
      </header>
    );
  }
}
