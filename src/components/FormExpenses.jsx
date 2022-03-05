import React from 'react';
// import { connect } from 'react-redux';
import Button from './Button';

class FormExpenses extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="expense">
          Valor:
          <input id="expense" data-testid="value-input" type="number" />
        </label>
        <select data-testid="currency-input">
          Moeda:
          <option></option>
        </select>
        <select data-testid="method-input">
          Método de pagamento:
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
        <select data-testid="tag-input">
          Tag:
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
        <label htmlFor="description">
          Descrição:
          <input id="description" type="text" />
        </label>
        <Button />
      </div>
    );
  }
}

export default FormExpenses;
