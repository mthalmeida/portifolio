import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MusicCard extends Component {
  render() {
    const {
      trackName,
      previewUrl,
      trackId,
      synchronizationWithLoad,
      checked,
    } = this.props;

    return (
      <div>
        <p>{ trackName }</p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          { ' ' }
          <code>audio</code>
        </audio>
        <label htmlFor="synchronizationWithLoad">
          Favorita
          <input
            className="synchronizationWithLoad"
            name="synchronizationWithLoad"
            data-testid={ `checkbox-music-${trackId}` }
            type="checkbox"
            onChange={ () => synchronizationWithLoad(this.props) }
            checked={ checked }
          />
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  synchronizationWithLoad: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  trackId: PropTypes.number.isRequired,
};
