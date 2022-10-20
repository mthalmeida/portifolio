import React from "react";
import proptypes from "prop-types";
import "./ProjectsCard.css";

export default class ProjectsCard extends React.Component {
  render() {
    const { name, description, url } = this.props;

    return (
      <div className="row-projects">
        <div className="card">
          <div className="card-header">{name}</div>
          <div className="card-body">
            <p className="card-text" id="card-text-project">
              {description}
            </p>
            <div>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                id="btnLink"
                class="btn-hover color"
              >
                <button class="btn-hover color-7">ABRIR PROJETO</button>
              </a>
            </div>
          </div>
        </div>
        <div class="buttons"></div>
      </div>
    );
  }
}

ProjectsCard.propTypes = {
  name: proptypes.string.isRequired,
  description: proptypes.string.isRequired,
  url: proptypes.string.isRequired,
};
