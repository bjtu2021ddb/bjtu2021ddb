import { closeDB, createDB } from '@/db';
import routes from '@/routes';
import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    createDB();
  }

  componentWillUnmount() {
    closeDB();
  }

  render() {
    return (
      <>
        {routes.map((route) => (
          <Route key={route.key} path={route.path} component={route.component} exact={route.exact}></Route>
        ))}
      </>
    );
  }
}

export default App;
