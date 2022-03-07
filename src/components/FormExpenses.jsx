import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './FormExpenses.css';
import { expenseControlThunk, getCurrenciesThunk } from '../actions';

const INITIAL_STATE = {
  value: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  description: '',
};

class FormExpenses extends React.Component {
  state = {
    id: 0,
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

  handleCost = () => {
    const { id } = this.state;
    // console.log(id);
    const ids = this.checkArrayOfExpenses(id);
    // console.log(ids);
    if (ids) {
      this.setState({ id: id + 1 });
    }
    const { dispatch } = this.props;
    dispatch(expenseControlThunk({ ...this.state, id }), () => {
    });
  }

  checkArrayOfExpenses = (expenses) => expenses.length !== 0;

  render() {
    const { currencies } = this.props;
    return (
      <div className="form-expenses">
        <label htmlFor="expense">
          Valor:
          <input
            id="expense"
            data-testid="value-input"
            type="number"
            name="value"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="coin">
          Moeda:
          <select
            id="coin"
            name="currency"
            type="select"
            data-testid="currency-input"
            onChange={ this.handleChange }
          >
            {currencies.map((currency) => (
              <option key={ currency } data-testid={ currency } value={ currency }>
                { currency }
              </option>))}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento:
          <select
            id="payment"
            name="method"
            type="select"
            data-testid="method-input"
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="cr">
          Tag:
          <select
            id="cr"
            name="tag"
            type="select"
            data-testid="tag-input"
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            id="description"
            type="text"
            name="description"
            data-testid="description-input"
            onChange={ this.handleChange }
          />
        </label>
        <button type="button" onClick={ this.handleCost }>Adicionar despesa</button>
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
