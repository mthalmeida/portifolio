import React from 'react';
import proptypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2 className="titleH2">{ headline }</h2>
    );
  }
}

Title.propTypes = {
  headline: proptypes.string.isRequired,
};

export default Title;
