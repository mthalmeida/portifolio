import React from 'react';
import Project_Data from '../data/projectsData';
import ProjectsCard from './ProjectsCard';

export default class Projects extends React.Component {
  render() {
    return (
      <div className='Project'>
        { Project_Data.map((projectinfo) => {
          const { name, description, url } = projectinfo;
          return (
            <ProjectsCard
              key={ name + url }
              name={ name }
              description={ description }
              url={ url }
            />
          );
        })}
      </div>
    );
  }
}
