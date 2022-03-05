import React from 'react';
import Header from '../components/Header';
import FormExpenses from '../components/FormExpenses';
import searchAPI from '../actions/requestAPI';
// import { connect } from 'react-redux';

class Wallet extends React.Component {
  state = {
    currencies: [],
  }

  componentDidMount = async () => {
    const currencies = await searchAPI();
    this.setState({
      currencies,
    });
  }

  render() {
    const { currencies } = this.state;
    return (
      <div>
        <Header />
        <FormExpenses currencies={ currencies } />
      </div>
    );
  }
}

export default Wallet;
