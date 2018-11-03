import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import AdminHeader from './AdminHeader';
import Login from './Login';
import CMS from './CMS/CMS';

class Admin extends Component {
  state = {
    loggedIn: false
  }

  componentDidMount(){
    if(localStorage.bizken){
      this.handleLogin();
    } 
  }

  handleLogout = () => {
    localStorage.removeItem('bizken');
    this.setState({ loggedIn: false })
  };

  handleLogin = () => this.setState({ loggedIn: true });

  render(){
    const { loggedIn } = this.state;
    const { handleLogout, handleLogin } = this;

    return (
      <div className='admin'>
        <AdminHeader loggedIn={ loggedIn } handleLogout={handleLogout}/>
        { 
          loggedIn ? 
          <CMS /> : <Login handleLogin={handleLogin}/>
        }

      </div>
    )
  }
}

export default Admin;