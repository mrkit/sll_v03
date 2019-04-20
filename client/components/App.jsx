import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Admin from './pages/Admin/Admin';
import axios from 'axios';


class App extends Component {
  componentWillMount(){
    const token = localStorage.bizken;
    token ?
      axios.defaults.headers.common.authorization = `Bearer ${token}` :
      delete axios.defaults.headers.common.authorization;
  }
  
  render(){
    return (
      <Switch>
        <Route path='/admin' component={Admin}/>
        <Route exact path='/' render={() => (
          <div className='container'>
            <Header/>
            <Main />
            <Footer />
          </div>
        )}/>

      </Switch>
    )
  }
}

export default App;