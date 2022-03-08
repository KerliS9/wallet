import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import FormExpenses from '../components/FormExpenses';
import ExpensesTable from '../components/ExpensesTable';
import { editCost, removeCost } from '../actions';

class Wallet extends React.Component {
  handleRemove = (id) => {
    const { dispatch } = this.props;
    dispatch(removeCost(id));
  };

  handleEditExpense = (id) => {
    const { dispatch, expenses } = this.props;
    dispatch(editCost());
    const expenseToEdit = expenses.find((expense) => id === expense.id);
    console.log(expenseToEdit);
    this.setState({ ...expenseToEdit });
  }

  handleFormToEdit = () => {
    const expense = this.handleEditExpense();
    console.log('handle', expense);
    if (expense.length >= 1) {
      this.setState({ ...expense });
    }
  }

  render() {
    const teste = this.handleFormToEdit;
    // console.log(teste, 'teste');
    return (
      <div>
        <Header />
        <FormExpenses handleFormToEdit={ this.handleFormToEdit } />
        <ExpensesTable
          handleRemove={ this.handleRemove }
          handleEditExpense={ this.handleEditExpense }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Wallet);
