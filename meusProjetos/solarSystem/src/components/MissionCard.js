import React from 'react';
import proptypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;

    return (
      <div data-testid="mission-card" className="missionCards">
        <p data-testid="mission-name">{ name }</p>
        <p data-testid="mission-year">{ year }</p>
        <p data-testid="mission-country">{ country }</p>
        <p data-testid="mission-destination">{ destination }</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: proptypes.string.isRequired,
  year: proptypes.string.isRequired,
  country: proptypes.string.isRequired,
  destination: proptypes.string.isRequired,
};

export default MissionCard;
