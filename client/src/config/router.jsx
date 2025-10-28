import { createBrowserRouter } from 'react-router-dom';
import { Main } from '../page/Main';
import { PrivateRoute } from '../components/PrivateRoute';
import { Auth } from '../page/Auth';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PrivateRoute>
        <Main />
      </PrivateRoute>
    ),
  },
  {
    path: '/login',
    element: <Auth />,
  },
  {
    path: '/register',
    element: <h1>Register</h1>,
  },
]);
