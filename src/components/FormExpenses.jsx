import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './FormExpenses.css';
// import { expenseControlThunk, getCurrenciesThunk } from '../actions';

/* const INITIAL_STATE = {
  value: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  description: '',
}; */

class FormExpenses extends React.Component {
  /* state = {
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
    const ids = this.checkArrayOfExpenses(id);
    if (ids) {
      this.setState({ id: id + 1 });
    }
    const { dispatch } = this.props;
    dispatch(expenseControlThunk({ ...this.state, id }));
    this.setState({ ...INITIAL_STATE });
  }

  checkArrayOfExpenses = (expenses) => expenses.length !== 0; */

  render() {
    const { currencies, isEditing, handleFormToEdit, handleChange, handleCost,
      value, currency, method, description, tag, handleNormalExpense } = this.props;
    return (
      <form
        className="form-expenses"
        onSubmit={ isEditing ? handleFormToEdit : handleNormalExpense }
      >
        <label htmlFor="expense">
          Valor:
          <input
            id="expense"
            data-testid="value-input"
            value={ value }
            name="value"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="coin">
          Moeda:
          <select
            id="coin"
            name="currency"
            type="select"
            data-testid="currency-input"
            onChange={ handleChange }
            value={ currency }
          >
            {currencies.map((curr) => (
              <option key={ curr } data-testid={ curr } value={ curr }>
                { curr }
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
            onChange={ handleChange }
            value={ method }
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
            onChange={ handleChange }
            value={ tag }
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
            onChange={ handleChange }
            value={ description }
          />
        </label>
        <button
          type="button"
          onClick={ handleCost }
        >
          { isEditing ? 'Editar despesa' : 'Adicionar despesa' }
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  isEditing: state.wallet.isEditing,
  // expenses: state.wallet.expenses,
});

FormExpenses.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  // dispatch: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleCost: PropTypes.func.isRequired,
  handleFormToEdit: PropTypes.func.isRequired,
  handleNormalExpense: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(FormExpenses);
