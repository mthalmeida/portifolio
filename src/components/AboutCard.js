import React from "react";
import proptypes from "prop-types";

export default class AboutCard extends React.Component {

  render() {
    const { title, text } = this.props;

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
  }
}

AboutCard.propTypes = {
  name: proptypes.string.isRequired,
  description: proptypes.string.isRequired,
  url: proptypes.string.isRequired,
};

