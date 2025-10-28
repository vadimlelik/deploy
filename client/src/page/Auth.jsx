import React from 'react';
import { useAuth } from '../provider/auth';

export const Auth = () => {
  const { login, register, user, logout } = useAuth();
  return (
    <div>
      <h1>Auth</h1>
      {user && <h1>{JSON.stringify(user)}</h1>}
      <button
        onClick={() => {
          register({
            name: 'Vadim',
            email: 'maksim@ya.ru',
            password: '123456',
          });
        }}
      >
        Register
      </button>
      <button onClick={() => login('maksim@ya.ru', '123456')}> Login</button>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};
