import React from 'react';
import Header from '../components/Header';
import FormExpenses from '../components/FormExpenses';
import ExpensesTable from '../components/ExpensesTable';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FormExpenses />
        <ExpensesTable />
      </div>
    );
  }
}

export default Wallet;
