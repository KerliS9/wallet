import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ButtonEdit from './ButtonEdit';
import ButtonDelete from './ButtonDelete';
import { removeCost } from '../actions';

class ExpensesTable extends React.Component {
  render() {
    const { expenses } = this.props;
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
                  <ButtonEdit />
                  <ButtonDelete />
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

const mapDispatchToProps = (dispatch) => ({
  delete: (expense) => dispatch(removeCost(expense)),
});

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
