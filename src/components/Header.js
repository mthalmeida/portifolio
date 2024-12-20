import React from 'react'
import './Header.css'
import bootstrap from './images/skills/bootstrap.png'
import csharp from './images/skills/csharp.png'
import css from './images/skills/css.png'
import html from './images/skills/html.png'
import javascript from './images/skills/javascript.png'
import node from './images/skills/node.png'
import npm from './images/skills/npm.png'
import php from './images/skills/php.png'
import reactImg from './images/skills/react.png'
import typescript from './images/skills/typescript.png'
import mui from './images/skills/mui.png'

export default class Header extends React.Component {
  render () {
    const skills = [
      { name: 'Bootstrap', img: bootstrap },
      { name: 'C#', img: csharp },
      { name: 'CSS', img: css },
      { name: 'HTML', img: html },
      { name: 'JavaScript', img: javascript },
      { name: 'Node.js', img: node },
      { name: 'NPM', img: npm },
      { name: 'PHP', img: php },
      { name: 'React', img: reactImg },
      { name: 'TypeScript', img: typescript },
      { name: 'Mui', img: mui }
    ]

    return (
      <div className="header">
        <div className="header-content">
          <h1>Matheus Almeida</h1>
          <h2>{'<Desenvolvedor Full Stack>'}</h2>
          <p className="specialization">WEB | ERP | PWA</p>
          <p>Sou um desenvolvedor de Minas Gerais que ama o design e a interação do usuário, amo desenvolver soluções escaláveis e completas. Seja bem-vindo ao meu portfólio!</p>
          <hr className="separator" />
          <div id="skills" className="col-md-6 col-sm-12">
            <ul className="skills-icons">
              {skills.map((skill) => (
                <li key={skill.name}>
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="skill-icon"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
