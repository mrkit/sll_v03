import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
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
      <div className='container'>
        <Header/>
        <Main />
        <Footer />
      </div>
    )
  }
}
export default App;