import React from 'react';
import './Login.css';

class Login extends React.Component {
  render() {
    return (
      <div className="content">
        <h1>TRYBE</h1>
        <form className="form-login">
          <input
            className="input"
            data-testid="email-input"
            type="email"
            placeholder="Digite seu email"
          />
          <input
            className="input"
            data-testid="password-input"
            type="password"
            placeholder="Digite sua senha"
            minLength="6"
          />
          <button type="button">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
