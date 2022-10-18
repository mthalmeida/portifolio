import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Navbar from './components/Navbar';

class App extends React.Component {
  constructor() {
    super();

    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'Normal',
      cardTrunfo: false,
      hasTrunfo: false,
      // isSaveButtonDisabled: '',
      cardsSaved: [],
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  onSaveButtonClick() {
    const { cardName, cardDescription, cardImage } = this.state;
    const cardAdd = { cardName, cardDescription, cardImage };

    this.setState((param) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardTrunfo: false,
      cardRare: 'normal',
      hasTrunfo: (param.cardTrunfo),
      cardsSaved: [...param.cardsSaved, cardAdd],
    }));
  }

  verifyInputs = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
    } = this.state;

    const entranceEmpty = cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && cardRare.length > 0;

    return entranceEmpty;
  };

  verifyNumbers = () => {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
      // cardTrunfo,
    } = this.state;

    // *************************************************
    // Criterios de ativação do botão "salvar" abaixo **
    // *************************************************

    const attributeMaximum = 90;
    const attributeMinimum = 0;
    const totalMaximumSummed = 210;

    const attribute1 = Number(cardAttr1);
    const attribute2 = Number(cardAttr2);
    const attribute3 = Number(cardAttr3);

    const validatingSum = attribute1 <= attributeMaximum && attribute1 >= attributeMinimum
    && attribute2 <= attributeMaximum && attribute2 >= attributeMinimum
    && attribute3 <= attributeMaximum && attribute3 >= attributeMinimum;

    const attributeSum = Number(attribute1)
    + Number(attribute2) + Number(attribute3)
    <= totalMaximumSummed;

    return validatingSum && attributeSum;
  };

  isSaveButtonDisabled = () => !this.verifyInputs() || !this.verifyNumbers();
  // ************************************************
  // Criterios de ativação do botão "salvar" acima **
  // ************************************************

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
      // isSaveButtonDisabled,
      cardsSaved,
    } = this.state;

    return (
      <body>
        <div>
          <Navbar />
          <div id="form1">
            <div id="form2">
              <Form
                cardName={ cardName }
                cardDescription={ cardDescription }
                cardAttr1={ cardAttr1 }
                cardAttr2={ cardAttr2 }
                cardAttr3={ cardAttr3 }
                cardImage={ cardImage }
                cardRare={ cardRare }
                cardTrunfo={ cardTrunfo }
                hasTrunfo={ hasTrunfo }
                onInputChange={ this.onInputChange }
                isSaveButtonDisabled={ this.isSaveButtonDisabled() }
                onSaveButtonClick={ this.onSaveButtonClick }
                id="button"
              />
            </div>
          </div>

          <div id="card1">
            <div id="card2">
              <Card
                cardName={ cardName }
                cardDescription={ cardDescription }
                cardAttr1={ cardAttr1 }
                cardAttr2={ cardAttr2 }
                cardAttr3={ cardAttr3 }
                cardImage={ cardImage }
                cardRare={ cardRare }
                cardTrunfo={ cardTrunfo }
                onInputChange={ this.onInputChange }
              />
            </div>
          </div>

          <div>
            {cardsSaved.map((cardItem, index) => (<Card
              key={ index }
              cardName={ cardItem.cardName }
              cardDescription={ cardItem.cardDescription }
              cardAttr1={ cardItem.cardAttr1 }
              cardAttr2={ cardItem.cardAttr2 }
              cardAttr3={ cardItem.cardAttr3 }
              cardImage={ cardItem.cardImage }
              cardTrunfo={ cardItem.cardTrunfo }
            />
            ))}
          </div>
        </div>
      </body>

    );
  }
}

export default App;
