import React from 'react';
import './Header.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CarteiraMarrom from '../images/carteiraMarromSemFundo.png'

class Header extends React.Component {
  totalExpenses = () => {
    const { expenses } = this.props;
    const total = expenses.reduce((acc, { exchangeRates, currency, value }) => (
      acc + ((exchangeRates[currency].ask) * value)), 0);
    return total.toFixed(2);
  };

  render() {
    const { userEmail } = this.props;
    return (
      <div className="header">
          <img width="50px" src={ CarteiraMarrom } alt="Carteira com dinheiro"/>
          <h2>TRYBE WALLET</h2>        
          <p data-testid="email-field">
            Email:
            { userEmail }
          </p>
          <p className="totalExpenses" data-testid="total-field">
            Despesa Total:
            { this.totalExpenses() }
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
