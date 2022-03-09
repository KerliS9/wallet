import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import FormExpenses from '../components/FormExpenses';
import ExpensesTable from '../components/ExpensesTable';
import { editCost, removeCost, saveEditCost,
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
    this.setState({ ...expenseToEdit });
  }

  handleNormalExpense = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(saveEditCost(this.state));
    console.log('test', this.state);
    this.setState({ ...INITIAL_STATE });
  }

  render() {
    return (
      <div>
        <Header />
        <FormExpenses
          { ...this.state }
          handleChange={ this.handleChange }
          handleCost={ this.handleCost }
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
