import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from './Button';
import './FormExpenses.css';
import { getCurrenciesThunk } from '../actions';
// import { expenseControlThunk } from '../actions';

const INITIAL_STATE = {
  value: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  description: '',
  exchangesRates: {},
};

class FormExpenses extends React.Component {
  state = {
    id: '',
    ...INITIAL_STATE,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getCurrenciesThunk());
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  /*  handleCost = () => {
    expenseControlThunk();
  } */
  // acessar a chave ask do moeda selecionada
  // somar todos os valores adicionados com reduce

  render() {
    const { currencies } = this.props;
    // console.log(currencies);
    return (
      <div className="form-expenses">
        <label htmlFor="expense">
          Valor:
          <input
            id="expense"
            data-testid="value-input"
            type="number"
            onChange={ this.handleChange }
          />
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
          <input
            id="description"
            type="text"
            data-testid="description-input"
            onChange={ this.handleChange }
          />
        </label>
        <Button onClick={ this.handleCost } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

FormExpenses.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(FormExpenses);
