import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Parallax from './pages/Parallax';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/parallax' component={Parallax}/>
    </Switch>
  </main>
);

export default Main;