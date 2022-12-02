import React from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About";
import CodeIs from "./components/CodeIs";
import Footer from "./components/Footer";
import Metrics from "./components/Metrics";

export default class App extends React.Component {
  render() {
    return (
        <body>
          <div>
            <div>
                <Header />
                <div id="Início"><CodeIs /></div>
              <div class="wrapper"></div>
            </div>
          </div>

          <div class="L-tewelve">
            <div class="row">
              <div class="section">
                <div id="Sobre"><About /></div>
              </div>
            </div>
          </div>

          <div id="Projetos" className="card-List">
              <div><Projects /></div>
          </div>

          <div id="Metricas" class="githubcardProject">
            <div><Metrics /></div>
          </div>

          <div id="Contatos"><Footer /></div>
        </body>

    );
  }
}
