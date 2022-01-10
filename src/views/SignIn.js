import React, { useState } from 'react'
import AuthForm from '../components/Auth';
import { signInUser } from '../services/users';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await signInUser(email, password);

    } catch {
      setErrorMsg('Try again');
    }
  };
  return (
    <div>
      <h1> SIgn in</h1>      
      <AuthForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleSubmit={handleSubmit} errorMsg={errorMsg} />
    </div>
  );
}
