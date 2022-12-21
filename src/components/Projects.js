import React from 'react'
import projectData from '../data/projectsData'
import './Projects.css'

export default class Projects extends React.Component {
  render () {
    return (
      <div className="projects">
        <div className="main">
          <ul className="cards">
            {projectData.map((projectInfo) => {
              const { name, description, url, page, image } = projectInfo
              const pageLength = page.length
              const urlLength = url.length
              return (
                <li key={name} className="cards_item">
                  <div className="card">
                    <div className="card_image">
                      <img alt="NameTitle" src={image} />
                    </div>
                    <div className="card_content">
                      <h2 className="card_title">{name}</h2>
                      <p className="card_text">{description}</p>
                      <div className="btnCard">
                        <abbr title="Abrir projeto no GitHub">
                          <a
                            href={urlLength !== 0 ? url : null}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <button
                              className={
                                urlLength !== 0
                                  ? 'btn-enabled card_btn'
                                  : 'btn-disabled card_btn'
                              }
                            >
                              <p className="fa fa-github"> Ver arquivos</p>
                            </button>
                          </a>
                        </abbr>

                        <abbr title="Ver pagina em funcionamento">
                          <a
                            href={pageLength !== 0 ? page : null}
                            target="_blank"
                            rel="noreferrer"
                            className="btnUrl"
                          >
                            <button
                              className={
                                pageLength === 0
                                  ? 'btn-disabled card_btn'
                                  : 'btn-enabled card_btn'
                              }
                            >
                              <p className="fa fa-link"> Abrir pagina</p>
                            </button>
                          </a>
                        </abbr>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}
