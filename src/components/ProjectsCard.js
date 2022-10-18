import React from "react";
import proptypes from "prop-types";
import './ProjectsCard.css';

export default class ProjectsCard extends React.Component {
  render() {
    const { name, description, url } = this.props;

    return (
      <div className="row-projects">
        <div className="card">
          <div className="card-header">{name}</div>
          <div className="card-body">
            <p className="card-text" id="card-text-project">{description}</p>
            <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary" id="btnLink">
              <p className="txtLink">Abrir projeto</p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

ProjectsCard.propTypes = {
  name: proptypes.string.isRequired,
  description: proptypes.string.isRequired,
  url: proptypes.string.isRequired,
};
