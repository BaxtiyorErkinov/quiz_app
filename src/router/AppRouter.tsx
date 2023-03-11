import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from '@/layout/App';

import Home from '@/pages/Home';
import Login from '@/pages/Auth/Login';
import Register from '@/pages/Auth/Register';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  {
    path: '/signin',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Register />,
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
