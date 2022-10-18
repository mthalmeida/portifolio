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
    } = this.props;

    return (
      <div>
        <p
          data-testid="name-card"
        >
          { cardName }
        </p>

        <img
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
        />

        <p
          data-testid="description-card"
        >
          { cardDescription }
        </p>

        <p
          data-testid="attr1-card"
        >
          { cardAttr1 }
        </p>

        <p
          data-testid="attr2-card"
        >
          { cardAttr2 }
        </p>

        <p
          data-testid="attr3-card"
        >
          { cardAttr3 }
        </p>

        <p
          data-testid="rare-card"
        >
          { cardRare }
        </p>

        { cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : ''}
      </div>
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
};

export default Form;
