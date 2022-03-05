import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import FormExpenses from '../components/FormExpenses';
import searchAPI from '../actions/requestAPI';
import { getCurrencies } from '../actions';

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

const mapDispatchToProps = (dispacth) => ({
  coin: (state) => dispacth(getCurrencies(state)),
});

export default connect(null, mapDispatchToProps)(Wallet);
