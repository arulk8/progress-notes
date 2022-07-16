import React, { useEffect, useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useStore } from '../../context/app-store';
import styles from './Login.module.css';
import logo from '../../static/images/google.svg';

function Login() {
  const { authError, userDetails, actions } = useStore();
  const navigate = useNavigate();
  const { login } = actions;
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const guestLogin = (event) => {
    event.preventDefault();
    login('arulmurugan194@gmail.com', 'test123');
  };
  useEffect(() => {}, []);

  if (userDetails) {
    return <Navigate to="/notes" />;
  }

  return (
    <div className={`${styles.container} flex-row flex-jc flex-aic`}>
      <div className={styles.form_section}>
        <h3 className="c-secondary text-center">Sign In</h3>
        <form
          className="form box-shadow"
          onSubmit={(event) => {
            event.preventDefault();
            login(email, password, userName);
          }}
        >
          <div className="form-group">
            <label className="label font-medium c-primary" htmlFor="email">
              Email :
            </label>
            <input
              id="email"
              className="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="label font-medium c-primary" htmlFor="password">
              Password :
            </label>
            <input
              id="username"
              className="input "
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {!!authError && !!authError.code && (
            <div className={styles.error__msg}>
              <span className="inline-block validation__msg input__error">
                <i className="fas fa-exclamation-triangle" />
                {authError.code}
              </span>
            </div>
          )}
          <div className={`form-group ${styles.action}`}>
            <button className="btn btn__primary" type="button">
              Sign In
            </button>
            <button className="btn btn__img" type="button">
              <img className="image" src={logo} alt="Google" />
              <span>Sign In</span>
            </button>
          </div>
          <div className="form-group">
            <button
              className="btn btn__primary"
              type="button"
              onClick={guestLogin}
            >
              Guest Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
