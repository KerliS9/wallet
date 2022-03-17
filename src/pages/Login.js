import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Login.css';
import { userLogin } from '../actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    disabled: true,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => {
      const { email, password } = this.state;
      const validEmail = this.validateEmail(email);
      const validPassword = this.checkPassword(password);
      if (validEmail && validPassword) {
        this.setState({ disabled: false });
      } else {
        this.setState({ disabled: true });
      }
    });
  };

  validateEmail = (email) => !!email.match(/\S+@\S+\.\S+/);

  checkPassword = (password) => {
    const MIN_LENGTH = 6;
    return password.length >= MIN_LENGTH;
  }

  render() {
    const { email, password, disabled } = this.state;
    const { connectAccount, history } = this.props;
    return (
      <div className="content">
        <h1>TRYBE</h1>
        <form className="form-login">
          <input
            className="input"
            data-testid="email-input"
            type="email"
            name="email"
            placeholder="Digite seu email"
            value={ email }
            onChange={ this.handleChange }
            required
          />
          <input
            className="input"
            data-testid="password-input"
            type="password"
            name="password"
            placeholder="Digite sua senha"
            value={ password }
            onChange={ this.handleChange }
            required
          />
          <button
            type="button"
            onClick={ () => {
              connectAccount(email);
              history.push('/carteira');
            } }
            disabled={ disabled }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  connectAccount: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  connectAccount: (state) => dispatch(userLogin(state)),
});

export default connect(null, mapDispatchToProps)(Login);

// https://www.codegrepper.com/code-examples/javascript/javascript+email+match+validation
