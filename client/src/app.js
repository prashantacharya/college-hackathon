import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Score from './components/Score';
import Result from './components/Result';

const App = () => {
  return (
    <div className="container">
      <div className="background">
        <Switch>
          <Route path="/score">
            <Score />
          </Route>
          <Route path="/result">
            <Result />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
