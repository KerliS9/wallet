import React from 'react';
import { connect } from 'react-redux';
import { BsTrash } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import PropTypes from 'prop-types';
import './ExpensesTable.css';

class ExpensesTable extends React.Component {
  render() {
    const { expenses, handleRemove, handleEditExpense } = this.props;
    return (
      <table className="table">
        <thead className="headTable">
          <tr>
            <th className="header_item">Descrição</th>
            <th className="header_item">Tag</th>
            <th className="header_item">Método de pagamento</th>
            <th className="header_item">Valor</th>
            <th className="header_item">Moeda</th>
            <th className="header_item">Câmbio utilizado</th>
            <th className="header_item">Valor convertido</th>
            <th className="header_item">Moeda de conversão</th>
            <th className="header_item">Editar/Excluir</th>
          </tr>
        </thead>
        <tbody className="bodyTable">
          {expenses.map(({
            id, value, method, tag, description, currency, exchangeRates,
          }) => {
            const exchange = exchangeRates[currency].ask;
            return (
              <tr key={ id }>
                <td className="table_data">{ description }</td>
                <td className="table_data">{ tag }</td>
                <td className="table_data">{ method }</td>
                <td className="table_data">{ (+value).toFixed(2) }</td>
                <td className="table_data">{ exchangeRates[currency].name }</td>
                <td className="table_data">{ (+exchange).toFixed(2) }</td>
                <td className="table_data">{ (exchange * +value).toFixed(2) }</td>
                <td className="table_data">Real</td>
                <td className="table_data">
                  <button
                    className="table_button"
                    type="button"
                    data-testid="edit-btn"
                    onClick={ () => handleEditExpense(id) }
                    >
                    <AiOutlineEdit />
                  </button>
                  <button
                    className="table_button"
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
