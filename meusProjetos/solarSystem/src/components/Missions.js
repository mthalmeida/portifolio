import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className='Missions'>
        <Title headline="Missões" />
        {missions.map((missionInfo) => {
          const { name, year, country, destination } = missionInfo;
          return (
            <MissionCard
              key={ name + year }
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
            />
          );
        })}
      </div>
    );
  }
}

export default Missions;
