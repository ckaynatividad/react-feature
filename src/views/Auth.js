import React, { useState } from 'react';
import AuthForm from '../components/Auth';
import { signInUser, signupUser } from '../services/users';
import classNames from 'classnames';

export default function Auth({ setUser }) {
  const [type, setType] = useState('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let resp;
      if (type === 'signin') {
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
    <><div>
      <h3 onClick={() => { setType('signin'); } } className={classNames({ active: type === 'signin' })}>
                Sign In
      </h3>
      <h3 onClick={() => { setType('signup'); } } className={classNames({ active: type === 'signup ' })}>
                Sign Up
      </h3>

    </div><p> Type: {type}</p><AuthForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleSubmit={handleSubmit} errorMsg={errorMsg} /></>
  );
}
