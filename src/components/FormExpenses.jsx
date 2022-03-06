import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import Button from './Button';
import './FormExpenses.css';
import searchAPI from '../actions/requestAPI';
import { expenseControlThunk } from '../actions';

class FormExpenses extends React.Component {
  state = {
    currencies: [],
  }

  componentDidMount = async () => {
    const api = await searchAPI();
    const currencies = Object.keys(api);
    // console.log(currencies);
    this.setState({
      currencies,
    });
  }

  handleCost = () => {
    expenseControlThunk();
  }
  // acessar a chave ask do moeda selecionada
  // somar todos os valores adicionados com reduce

  render() {
    const { currencies } = this.state;
    // console.log(currencies);
    return (
      <div className="form-expenses">
        <label htmlFor="expense">
          Valor:
          <input id="expense" data-testid="value-input" type="number" />
        </label>
        <label htmlFor="coin">
          Moeda:
          <select id="coin" name="" type="select" data-testid="currency-input">
            {currencies.map((currency) => (
              <option key={ currency } data-testid={ currency } value={ currency }>
                { currency }
              </option>))}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento:
          <select id="payment" name="" type="select" data-testid="method-input">
            <option value="dinheiro">Dinheiro</option>
            <option value="cartão de crédito">Cartão de crédito</option>
            <option value="cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="cr">
          Tag:
          <select id="cr" name="" type="select" data-testid="tag-input">
            <option value="alimentação">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saúde">Saúde</option>
          </select>
        </label>
        <label htmlFor="description">
          Descrição:
          <input id="description" type="text" data-testid="description-input" />
        </label>
        <Button onClick={ this.handleCost } />
      </div>
    );
  }
}

/* const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
}); */

/* FormExpenses.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
}; */

export default FormExpenses;
