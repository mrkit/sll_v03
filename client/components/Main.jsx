import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' render={() => <h2>This is the About Page</h2>}/>
    </Switch>
  </main>
);

export default Main;