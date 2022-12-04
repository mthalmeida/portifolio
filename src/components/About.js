import React from 'react';
import About_Data from '../data/AboutData';
import './About.css';

export default class About extends React.Component {
  render() {
    return (
      <div id='about'><div className='About'>
        { About_Data.map((aboutinfo) => {
          const { title, text } = aboutinfo;
          return (
            <div class="card-about">
      <div class="card2-about">
        <img
          src="https://uploaddeimagens.com.br/images/004/065/849/original/foto.jpg"
          className="img-fluid rounded-start"
          alt="Foto de perfil Dev"
        />
      <div className="about-text">          
        <h5 className="card-title-about">{title}</h5>
        <p className="card-text-about">
          <i>{text}</i>
        </p>
      </div>

    </div>
      </div>
          );
        })}
      </div>
      </div>
    );
  }
}
