import React from 'react';
import { connect } from 'react-redux';
import { BsTrash } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import PropTypes from 'prop-types';

class ExpensesTable extends React.Component {
  render() {
    const { expenses, handleRemove, handleEditExpense } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(({
            id, value, method, tag, description, currency, exchangeRates,
          }) => {
            const exchange = exchangeRates[currency].ask;
            return (
              <tr key={ id }>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ (+value).toFixed(2) }</td>
                <td>{ exchangeRates[currency].name }</td>
                <td>{ (+exchange).toFixed(2) }</td>
                <td>{ (exchange * +value).toFixed(2) }</td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="edit-btn"
                    onClick={ () => handleEditExpense(id) }
                  >
                    <AiOutlineEdit />
                  </button>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => handleRemove(id) }
                  >
                    <BsTrash />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleEditExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(ExpensesTable);
