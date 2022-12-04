import React from 'react';
import Project_Data from '../data/projectsData';
import "./Projects.css";

export default class Projects extends React.Component {
  render() {
    return (
      <div>
        <h1 className='title-card'>Veja alguns dos meus projetos:</h1>
        <div className="main">
        <ul className="cards">
          
        
          { Project_Data.map((projectinfo) => {
            const { name, description, url } = projectinfo;
            return (
              <li className="cards_item">
                <div className="card">
                  <div className="card_image">
                    <img alt="NameTitle" src="https://wallpapercave.com/wp/wp4325532.jpg"/>
                  </div>
                  <div className="card_content">
                    <h2 className="card_title">{name}</h2>
                    <p className="card_text">{description}</p>
                    <a id='url' href={url} >
                      <button 
                      className="btn card_btn">
                      <p class="fa fa-github"> Ver projeto</p>
                    </button>
                    </a>
                  </div>
                </div>
              </li>
            )
          })}


        </ul>
      </div>
    </div>
  );
  }
}
