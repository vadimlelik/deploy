import { createContext } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
const ULR = 'http://localhost:3005';

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const register = async (payload) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        'http://localhost:3005/api/v1/auth/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
          credentials: 'include',
        },
      );
      const data = await response.json();
      setUser(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  const login = async (email, password) => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:3005/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      });
      const data = await response.json();
      setUser(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  const logout = async () => {
    setIsLoading(true);
    try {
      await fetch('http://localhost:3005/api/v1/auth/logout', {
        credentials: 'include',
        method: 'POST',
      });
      setUser(null);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  const getUser = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:3005/api/v1/auth/me', {
        credentials: 'include',
      });
      const data = await response.json();
      if (response.status === 401) {
        throw new Error(data.message);
      }
      setUser(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <AuthContext value={{ user, isLoading, register, login, logout, getUser }}>
      {isLoading ? <h1>...loading</h1> : children}
    </AuthContext>
  );
};
