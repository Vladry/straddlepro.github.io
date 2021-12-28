import React from 'react';
import { Route, Switch } from 'react-router';
import { Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Team from '../pages/Team';

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path='/' render={() => <Redirect to='/home' />} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/team' component={Team} />
    </Switch>
  );
};

export default App;
