import React from 'react';
import About_Data from '../data/AboutData';
import AboutCard from './AboutCard';
import './About.css';

export default class About extends React.Component {
  render() {
    return (
      <div id='about'><div className='About'>
        { About_Data.map((aboutinfo) => {
          const { title, text } = aboutinfo;
          return (
            <AboutCard
            title={ title }
            text={ text }
            />
          );
        })}
      </div>
      </div>
    );
  }
}
