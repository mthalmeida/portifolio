import React, { Component } from 'react';
import { shape, func } from 'prop-types';
import Loading from '../Components/Loading';
import { createUser } from '../services/userAPI';
import './styles/login.css';
import LogoImagem from './styles/logo512.png';

export default class Login extends Component {
  constructor() {
    super();
    this.state = { button: false, loading: false, loginName: '' };
  }

  btnValidator = () => {
    const { loginName } = this.state;
    const magicNumber = 3;

    if (loginName.length >= magicNumber) {
      this.setState({ button: true });
    }
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.btnValidator);
  };

  clickButton = async () => {
    const { loginName } = this.state;
    const { history } = this.props;

    this.setState({ loading: true });

    // createUser({ name: "Nome digitado" });
    await createUser({ name: loginName });
    this.setState({ loading: false });
    history.push('/search');
  };

  render() {
    const { loginName, loading, button } = this.state;
    if (loading) return <Loading />;
    const imagem = LogoImagem;

    return (
      <div className="login">
        <div>
          <img src={ imagem } alt="Logo" className="logo" />
          <h2 className="logoTxt">React Music</h2>
        </div>
        <div data-testid="page-login">
          <div className="input">
            <input
              value={ loginName }
              className="input-entrar"
              type="text"
              name="loginName"
              data-testid="login-name-input"
              placeholder="Digite seu nome"
              onChange={ this.handleChange }
            />
          </div>

          <div>
            <button
              className="button-entrar"
              name="button"
              type="button"
              data-testid="login-submit-button"
              disabled={ button === true ? '' : 'disabled' }
              onClick={ this.clickButton }
            >
              <p className="txtBtn">Entrar</p>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  history: shape({ push: func.isRequired }).isRequired,
};
