import React, { useState } from 'react';
import AuthForm from '../components/Auth';
import { signInUser, signupUser } from '../services/users';
import classNames from 'classnames';
import './Auth.css';

export default function Auth({ setUser }) {
  const [type, setType] = useState('Login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let resp;
      if (type === 'Login') {
        resp = await signInUser(email, password);
      } else {
        resp = await signupUser(email, password);
      }
      setUser(resp);
    } catch {
      setErrorMsg('Your email or password is incorrect, try again or sign up.');
    }
  };
  return (
    <><div className="buttons">
      {/* <button onClick={() => { setType('Login'); } } className={classNames({ active: type === 'Login' })}>
                Login
      </button> */}

    </div><div className="complete"><h3>{type}</h3><AuthForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleSubmit={handleSubmit} errorMsg={errorMsg} /><button onClick={() => { setType('Sign Up'); } } className={classNames({ active: type === 'Sign Up' })}>
                Sign Up
    </button>
    </div></>
  );
}
