import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './FormExpenses.css';

class FormExpenses extends React.Component {
  render() {
    const { currencies, isEditing, handleChange, handleNormalExpense,
      value, currency, method, description, tag, handleExpenseEdited } = this.props;
    return (
      <form className="form-expenses">
        <label htmlFor="expense">
          Valor:
          <input
            className="inputTable"
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
            className="inputTable"
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
            className="inputTable"
            id="payment"
            name="method"
            type="select"
            data-testid="method-input"
            onChange={ handleChange }
            value={ method }
          >
            <option value="Dinheiro" className="inputTable">Dinheiro</option>
            <option value="Cartão de crédito" className="inputTable">Cartão de crédito</option>
            <option value="Cartão de débito" className="inputTable">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="cr">
          Tag:
          <select
            className="inputTable"
            id="cr"
            name="tag"
            type="select"
            data-testid="tag-input"
            onChange={ handleChange }
            value={ tag }
          >
            <option value="Alimentação" className="inputTable">Alimentação</option>
            <option value="Lazer" className="inputTable">Lazer</option>
            <option value="Trabalho" className="inputTable">Trabalho</option>
            <option value="Transporte" className="inputTable">Transporte</option>
            <option value="Saúde" className="inputTable">Saúde</option>
          </select>
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            className="inputTable"
            id="description"
            type="text"
            name="description"
            data-testid="description-input"
            onChange={ handleChange }
            value={ description }
          />
        </label>
        <button
          className="buttonTable"
          type="button"
          onClick={ isEditing ? handleExpenseEdited : handleNormalExpense }
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
});

FormExpenses.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  isEditing: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleNormalExpense: PropTypes.func.isRequired,
  handleExpenseEdited: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(FormExpenses);
