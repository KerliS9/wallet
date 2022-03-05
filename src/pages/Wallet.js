import React from 'react';
// import { connect } from 'react-redux';
import Header from '../components/Header';
import FormExpenses from '../components/FormExpenses';
import searchAPI from '../actions/requestAPI';
// import { getCurrencies } from '../actions';
import { getCurrenciesThunk } from '../actions';

class Wallet extends React.Component {
/*   state = {
    currencies: [],
  } */

  /*  componentDidMount = async () => {
    const currencies = await searchAPI();
    this.setState({
      currencies,
    });
  } */ // chamar a função thunk dentro do didMount

  componentDidMount() {
    getCurrenciesThunk();
    searchAPI();
  }

  render() {
    // const { currencies } = this.state;
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
