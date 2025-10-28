import React from 'react';
import { useAuth } from '../provider/auth';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const { isLoading, user } = useAuth();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(Boolean(user));
  if (!user) {
    return <Navigate to='/login' />;
  }
  return <>{children}</>;
};
