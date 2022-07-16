/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useStore } from '../../context/app-store';
import styles from './SignUp.module.css';
import logo from '../../static/images/google.svg';

function SignUp() {
  const { authError, actions } = useStore();
  const { signUp } = actions;
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [isFormValid, setIsFormValid] = useState(false);
  const guestLogin = (event) => {
    event.preventDefault();
    signUp('arulmurugan194@gmail.com', 'test123', 'Arul');
  };
  useEffect(() => {
    setIsFormValid(!!userName && !!password);
  }, [userName, password]);
  return (
    <div className={`${styles.container} flex-row flex-jc flex-aic`}>
      <div className={styles.form_section}>
        <h3 className="c-secondary text-center">Create new account</h3>
        <form
          className="form box-shadow"
          onSubmit={(event) => {
            event.preventDefault();
            signUp(email, password, userName);
          }}
        >
          <div className="form-group">
            <label className="label font-medium c-primary" htmlFor="username">
              Username :
            </label>
            <input
              id="username"
              className="username input"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="label font-medium c-primary" htmlFor="email">
              Email :
            </label>
            <input
              id="email"
              className="email input"
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
              id="password"
              className="password input"
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
              Sign Up
            </button>
            <button className="btn btn__img" type="button">
              <img className="image" src={logo} alt="Google" />
              <span>Sign Up</span>
            </button>
          </div>
          <div className="form-group">
            <button
              className="btn btn__primary"
              type="button"
              onClick={guestLogin}
            >
              Guest Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
