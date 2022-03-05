import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import Button from './Button';
import './FormExpenses.css';
import searchAPI from '../actions/requestAPI';

class FormExpenses extends React.Component {
  state = {
    currencies: [],
  }

  componentDidMount = async () => {
    const currencies = await searchAPI();
    this.setState({
      currencies,
    });
  }

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
              <option key={ currency } data-testid={ currency } value="currency">
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
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <label htmlFor="description">
          Descrição:
          <input id="description" type="text" data-testid="description-input" />
        </label>
        <Button />
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
