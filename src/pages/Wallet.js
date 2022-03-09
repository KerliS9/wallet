import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import FormExpenses from '../components/FormExpenses';
import ExpensesTable from '../components/ExpensesTable';
import { editCost, removeCost, saveEditCost, notEdit,
  expenseControlThunk, getCurrenciesThunk } from '../actions';

const INITIAL_STATE = {
  value: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  description: '',
};

class Wallet extends React.Component {
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
    const ids = this.checkArrayOfExpenses(id);
    if (ids) {
      this.setState({ id: id + 1 });
    }
    const { dispatch } = this.props;
    dispatch(expenseControlThunk({ ...this.state, id }));
    this.setState({ ...INITIAL_STATE });
  }

  checkArrayOfExpenses = (expenses) => expenses.length !== 0;

  handleRemove = (id) => {
    const { dispatch } = this.props;
    dispatch(removeCost(id));
  };

  handleEditExpense = (id) => {
    const { dispatch, expenses } = this.props;
    dispatch(editCost());
    const expenseToEdit = expenses.find((expense) => id === expense.id);
    console.log(expenseToEdit);
    dispatch(removeCost(id));
    this.setState({ ...expenseToEdit });
  }

  handleFormToEdit = () => {
    const expense = this.handleEditExpense();
    if (expense.length >= 1) {
      this.setState({ ...expense });
    }
  }

  handleNormalExpense = (e) => {
    e.preventDefault();
    console.log('id');
    const { dispatch } = this.props;
    dispatch(saveEditCost());
    this.setState({ ...INITIAL_STATE });
    dispatch(notEdit());
  }

  render() {
    return (
      <div>
        <Header />
        <FormExpenses
          { ...this.state }
          handleChange={ this.handleChange }
          handleCost={ this.handleCost }
          handleFormToEdit={ this.handleFormToEdit }
          handleNormalExpense={ this.handleNormalExpense }
        />
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
  currencies: state.wallet.currencies,
});

Wallet.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Wallet);
