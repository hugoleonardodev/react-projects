import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import * as core from '../core/index';
import rockGlass from '../images/rockGlass.svg';
import Loading from '../components/__commom__/Loading';
import RecipiesContext from '../database/RecipiesContext';

const Login = () => {
  const { isFetching, email, setEmail } = useContext(RecipiesContext);
  const [password, setPassword] = useState('');
  const [isDisbled, setIsDisbled] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const history = useHistory();
  useEffect(() => {
    const validEmail = core.validateEmail(email);
    const validPassword = core.validatePassword(password);
    if (validPassword && validEmail) {
      return () => setIsDisbled(false);
    }
    return () => setIsDisbled(true);
  }, [email, password, setIsDisbled]);
  useEffect(() => {
    if (redirect) {
      localStorage.setItem('user', JSON.stringify({ email }));
      localStorage.setItem('mealsToken', JSON.stringify(1));
      localStorage.setItem('cocktailsToken', JSON.stringify(1));
      return history.push('/comidas');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [redirect, history]);
  return (
    <main className="meals">
      {isFetching ? <Loading /> : <div />}
      <span className="logo">TRYBE</span>
      <object
        className="rocksGlass"
        type="image/svg+xml"
        data={ rockGlass }
      >
        Glass
      </object>
      <form action="login" method="post" id="login">
        <legend style={ { display: 'contents' } }>Login</legend>
        <label htmlFor="email-input" className="input-labels">
          <input
            type="email"
            name="email-input"
            id="email-input"
            data-testid="email-input"
            placeholder="Email"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>
        <label htmlFor="password-input" className="input-labels">
          <input
            type="password"
            name="password-input"
            id="password-input"
            data-testid="password-input"
            placeholder="Senha"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>
        <button
          type="submit"
          data-testid="login-submit-btn"
          id="login-submit-btn"
          disabled={ isDisbled }
          onClick={ () => setRedirect(true) }
        >
          Entrar
        </button>
      </form>
    </main>
  );
};

export default Login;
