import React from 'react'
import './Footer.css'

export default class Footer extends React.Component {
  render () {
    return (
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Feito e atualizado constantemente usando HTML, CSS, JS, React,
                suor e muito ❤!
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="github"
                    href="https://github.com/mthalmeida"
                  >
                    <i className="fa fa-github" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="linkedin"
                    href="https://www.linkedin.com/in/mthalmeida/"
                  >
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="instagram"
                    href="https://instagram.com/mthalmeida"
                  >
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="whatsapp"
                    href="https://wa.me/5531994405788?text=Vim+pelo+site+de+desenvolvimento%21"
                  >
                    <i className="fa fa-whatsapp" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="facebook"
                    href="https://www.facebook.com/matheusalmeida.mobelar/"
                  >
                    <i className="fa fa-facebook" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
