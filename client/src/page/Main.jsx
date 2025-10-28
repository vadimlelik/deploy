import React from 'react';
import { useAuth } from '../provider/auth';

export const Main = () => {
  const { isLoading, user } = useAuth();
  return <div>{JSON.stringify(user)}</div>;
};
