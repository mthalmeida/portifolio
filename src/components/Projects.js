import React from "react";
import projectData from "../data/projectsData";
import "./Projects.css";

export default class Projects extends React.Component {
  render() {
    return (
      <div className="projects">
        <h1 className="title-card">Veja alguns dos meus projetos:</h1>
        <div className="main">
          <ul className="cards">
            {projectData.map((projectInfo) => {
              const { name, description, url, image } = projectInfo;
              return (
                <li key={name} className="cards_item">
                  <div className="card">
                    <div className="card_image">
                      <img alt="NameTitle" src={image} />
                    </div>
                    <div className="card_content">
                      <h2 className="card_title">{name}</h2>
                      <p className="card_text">{description}</p>
                      <a href={url} target="_blank" rel="noreferrer">
                        <button className="btn card_btn">
                          <p className="fa fa-github"> Ver projeto</p>
                        </button>
                      </a>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
