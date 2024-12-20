import React, { Component } from 'react'
import Header from './components/Header'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Loading from './components/Loading'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({ loading: false })
    }, 1000)
  }

  render () {
    const { loading } = this.state

    return (
      <div>
        {loading
          ? <Loading />
          : (
            <>
              <Navbar />
              <div id="inicio"></div>
              <Header />
              <div id="sobre"></div>
              <About />
              <div id="projetos"></div>
              <Projects />
              <div id="contato"></div>
              <Contact />
              <Footer />
            </>
            )
        }
      </div>
    )
  }
}
