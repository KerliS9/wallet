import React from 'react';
import Header from '../components/Header';
import FormExpenses from '../components/FormExpenses';
// import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FormExpenses />
      </div>
    );
  }
}

export default Wallet;
