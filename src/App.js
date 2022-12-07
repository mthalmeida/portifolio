import React from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

export default class App extends React.Component {
  render() {
    return (
      <body>
        <div id="inicio"></div>
        <Header />
        <div id="sobre"></div>
        <About />
        <div id="projetos"></div>
        <Projects />
        <Footer />
      </body>
    );
  }
}
