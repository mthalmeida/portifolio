import React from 'react';
import proptypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    const trunfoAdded = hasTrunfo
      ? <span>Você já tem um Super Trunfo em seu baralho</span>
      : (
        <label htmlFor="superTrunfo">
          <h6>Super Trunfo!</h6>
          <input
            className="input-supertrunfo"
            name="cardTrunfo"
            type="checkbox"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>);

    return (
      <form>
        <label htmlFor="name">
          <h6>Nome da carta:</h6>
          <input
            className="input"
            name="cardName"
            type="text"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="description">
          <h6>Descrição</h6>
          <input
            className="input"
            name="cardDescription"
            type="textarea"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr1">
          <h6>Força</h6>
          <input
            className="input"
            name="cardAttr1"
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr2">
          <h6>Resistência</h6>
          <input
            className="input"
            name="cardAttr2"
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr3">
          <h6>Garra</h6>
          <input
            className="input"
            name="cardAttr3"
            type="Number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="image">
          <h6>Imagem:</h6>
          <input
            className="input"
            name="cardImage"
            type="text"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
            placeholder="URL da imagem"
          />
        </label>

        <label htmlFor="rare">
          <h6>Nível de raridade</h6>
          <select
            name="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
            className="input-rare"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        {trunfoAdded}

        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          className="input-btn"
        >
          Salvar
        </button>

      </form>
    );
  }
}
Form.propTypes = {
  cardName: proptypes.string.isRequired,
  cardDescription: proptypes.string.isRequired,
  cardAttr1: proptypes.string.isRequired,
  cardAttr2: proptypes.string.isRequired,
  cardAttr3: proptypes.string.isRequired,
  cardImage: proptypes.string.isRequired,
  cardRare: proptypes.string.isRequired,
  cardTrunfo: proptypes.bool.isRequired,
  hasTrunfo: proptypes.bool.isRequired,
  isSaveButtonDisabled: proptypes.bool.isRequired,
  onInputChange: proptypes.func.isRequired,
  onSaveButtonClick: proptypes.func.isRequired,
};

export default Form;
