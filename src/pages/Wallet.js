import React from 'react';
// import { connect } from 'react-redux';
import Header from '../components/Header';
import FormExpenses from '../components/FormExpenses';
// import { getCurrencies } from '../actions';
// import { getCurrenciesThunk } from '../actions';

class Wallet extends React.Component {
/*  componentDidMount = async () => {
    // const test1 = await getCurrenciesThunk();
    // console.log('thunk', test1);
  } */

  render() {
    return (
      <div>
        <Header />
        <FormExpenses />
      </div>
    );
  }
}

/* const mapDispatchToProps = (dispacth) => ({
  currencies: (state) => dispacth(getCurrencies(state)),
}); */

export default Wallet;
