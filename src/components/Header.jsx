import React from 'react';
import './Header.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
/*   state = {
    total: 0,
  }

  totalExpenses = () => {
    const { expenses } = this.props;
    // console.log(expenses);
    const total = expenses.reduce((acc, { exchangeRates, currency, value }) => (
      acc + ((exchangeRates[currency].ask) * value)));
    this.setState({ total });
    console.log(total);
  }; */

  render() {
    const { userEmail, expenses } = this.props;
    // const { total } = this.state;
    return (
      <div className="header">
        <h1>TRYBE</h1>
        <p data-testid="email-field">
          Email:
          { userEmail }
        </p>
        <p data-testid="total-field">
          Despesa Total:
          { expenses.reduce((acc, { exchangeRates, currency, value }) => (
            acc + ((exchangeRates[currency].ask) * value)), 0) }
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Header);
