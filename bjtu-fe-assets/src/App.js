import AV from 'leancloud-storage/live-query';
import { Route } from 'react-router-dom';
import './App.css';
import routes from './routes';

AV.init({
  appId: 'D2Lp5opsBuU0pViwGNsM9I88-gzGzoHsz',
  appKey: 'sTjoMU6UUPTSV127KrTJcC0Q',
  serverURL: 'https://d2lp5ops.lc-cn-n1-shared.com',
});

function App() {
  return (
    <>
      {routes.map((route) => (
        <Route
          key={route.key}
          path={route.path}
          component={route.component}
          exact={route.exact}
        ></Route>
      ))}
    </>
  );
}

export default App;
