import { createBrowserRouter } from 'react-router-dom';
import Login from '../views/Login';
import Dashboard from '../views/Dashboard';

const routes = [
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  }
];

const router = createBrowserRouter(routes);
export default router;
