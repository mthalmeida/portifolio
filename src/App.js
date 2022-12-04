import React from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import Metrics from "./components/Metrics";

export default class App extends React.Component {
  render() {
    return (
        <body>
            <div id="inicio"><Header /></div>
            <div id="sobre" ><About /></div>
            <div id="projetos"><Projects /></div>
            <div id="metricas"><Metrics /></div>
            <div id="contato"><Footer /></div>
        </body>

    );
  }
}
