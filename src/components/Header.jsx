import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>TRYBE</h1>
        <p data-testid="email-field">Email</p>
        <p data-testid="total-field">Despesa Total</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

export default Header;
