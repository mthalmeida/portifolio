import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import musicsAPI from '../services/musicsAPI';
import MusicCard from '../Components/MusicCard';
import Loading from '../Components/Loading';
import { addSong, removeSong, getFavoriteSongs } from '../services/favoriteSongsAPI';

export default class Album extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      musics: [],
      favoritelist: [],
      album: [],
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    this.musicsAPI(params.id);
  }

  musicsAPI = async (id) => {
    const list = await musicsAPI(id);
    const callListFavorite = await getFavoriteSongs();
    this.setState({
      album: list[0],
      musics: list.slice(1),
      favoritelist: callListFavorite,
    }, () => this.setState({ loading: false }));
  };

  checkTrue = (musicFav) => {
    const { favoritelist } = this.state;
    return favoritelist.some((fav) => fav.trackId === musicFav?.trackId);
  };

  synchronizationWithLoad = async (musicFav) => {
    const { favoritelist } = this.state;
    // Ao check ficar true, faz um sincronismo entre tela de loading
    // e atualiza listagem de favoritos

    if (this.checkTrue(musicFav)) {
      this.setState({ loading: true });

      // Chamando função externa no arquivo musicsAPI.js
      await removeSong(musicFav);
      const removeItemList = favoritelist.filter((e) => e.trackId !== musicFav?.trackId);
      this.setState({
        loading: false,
        favoritelist:
        removeItemList,
      });
    } else {
      this.setState({ loading: true });

      // Chamando função externa no arquivo musicsAPI.js
      await addSong(musicFav);
      this.setState((prevState) => ({ loading: false,
        favoritelist: [...prevState.favoritelist, musicFav] }));
    }
  };

  render() {
    const { musics, loading, album } = this.state;

    return (
      <div data-testid="page-album">
        <Header />
        {loading ? <Loading /> : (
          <div>
            <p
              className="artist-name"
              data-testid="artist-name"
            >
              {album.artistName}
            </p>

            <p
              className="album-name"
              data-testid="album-name"
            >
              {album.collectionName}
            </p>

            {musics.map((item) => (<MusicCard
              key={ item.trackName }
              { ...item }
              checked={ this.checkTrue(item) }
              synchronizationWithLoad={ this.synchronizationWithLoad }
            />))}

          </div>
        )}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
