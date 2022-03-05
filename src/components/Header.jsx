import React from 'react';
import './Header.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { userEmail } = this.props;
    return (
      <div className="header">
        <h1>TRYBE</h1>
        <p data-testid="email-field">
          Email:
          { userEmail }
        </p>
        <p data-testid="total-field">Despesa Total: 0</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
