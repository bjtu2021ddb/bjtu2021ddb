import Home from './pages/Home';
import TaskEdit from './pages/TaskEdit';
const routes = [
  {
    key: 'Home',
    path: '/',
    component: Home,
    exact: true,
  },
  {
    key: 'TaskEdit',
    path: '/task/:objectId',
    component: TaskEdit,
  },
];

export default routes;
