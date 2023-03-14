import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from '@/layout/App';

import Home from '@/pages/Home';
import Login from '@/pages/Auth/Login';
import Register from '@/pages/Auth/Register';
import Favorites from '@/pages/Favorites';
import Quiz from '@/pages/Quiz';
import QuizStep from '@/pages/Quiz/QuizStep';
import QuizFinish from '@/pages/Quiz/QuizFinish';
import History from '@/pages/History';
import Leaderboard from '@/pages/Leaderboard';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'quiz/:quizID',
        element: <Quiz />,
      },
      {
        path: 'quiz/:quizID/step',
        element: <QuizStep />,
      },
      {
        path: 'quiz/:quizID/finish',
        element: <QuizFinish />,
      },
      {
        path: '/favorite',
        element: <Favorites />,
      },
      {
        path: '/history',
        element: <History />,
      },
      {
        path: 'leaderboard',
        element: <Leaderboard />,
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
