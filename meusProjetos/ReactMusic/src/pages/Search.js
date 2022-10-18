import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Loading from '../Components/Loading';
import './styles/search.css';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      button: false,
      loading: false,
      search: '',
      showInformation: false,
      artista: false,
      album: [],
    };
  }

  btnValidator = () => {
    const { search } = this.state;
    const magicNumber = 2;

    if (search.length >= magicNumber) {
      this.setState({ button: true });
    }
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.btnValidator);
  };

  btnEvent = () => {
    const { search } = this.state;
    searchAlbumsAPI(search).then((response) => this.setState({
      album: response,
      loading: false,
    }));
    this.setState({ search: '', loading: true, artista: search, showInformation: true });
  };

  render() {
    const {
      search,
      loading,
      button,
      album,
      artista,
      showInformation,
    } = this.state;

    if (loading) return <Loading />;
    return (
      <div data-testid="page-search">
        <Header />
        <div className="search">
          <div data-testid="page-login">
            <div className="input">
              <input
                value={ search }
                className="input-search"
                type="text"
                name="search"
                data-testid="search-artist-input"
                placeholder="Pesquise por nome da banda ou artista"
                onChange={ this.handleChange }
              />
            </div>

            <div>
              <button
                className="button-search"
                name="button"
                type="button"
                data-testid="search-artist-button"
                disabled={ button === true ? '' : 'disabled' }
                onClick={ this.btnEvent }
              >
                Pesquisar
              </button>
            </div>
          </div>
        </div>

        <div className="cardResult1">
          <div>
            <div>
              {showInformation && (
                <h2 className="resulTitle">
                  { `Resultado de álbuns de: ${artista} `}
                </h2>
              ) }
              { album.length === 0 ? <p className="fa">Nenhum álbum foi encontrado</p> : (
                album.map((musics) => (
                  <div key={ musics.collectionId } className="cardResult2">
                    <img
                      className="cardImg"
                      src={ musics.artworkUrl100 }
                      alt={ musics.collectionName }
                    />
                    <p className="collection">{ musics.collectionName }</p>
                    <p className="artist">{ musics.artistName }</p>
                    <div className="information2">
                      <Link
                        className="information"
                        to={ `/album/${musics.collectionId}` }
                        data-testid={ `link-to-album-${musics.collectionId}` }
                      >
                        Mais detalhes
                      </Link>
                    </div>
                  </div>
                ))
              )}
            </div>

          </div>
        </div>
      </div>
    );
  }
}
