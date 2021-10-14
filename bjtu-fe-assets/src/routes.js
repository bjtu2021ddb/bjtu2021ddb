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
    path: '/task/:_id',
    component: TaskEdit,
  },
];

export default routes;
