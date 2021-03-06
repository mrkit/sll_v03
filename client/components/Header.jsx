import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Header extends Component { 
  state = {
    signOrLog: 'signup',
    toggleLogInText: 'Log In?'
  }

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = e.target;
    
    axios.post(`/api/auth/${this.state.signOrLog}`, {username: username.value, password: password.value })
    .then(res => res.data)
    .then(token => {
      localStorage.setItem('bizken', token);
      console.log(token);
    })
    .catch(err => console.log(`Axios Post error ${err.message}`));
    
    e.target.username.value = '';
    e.target.password.value = '';
  }
  
  toggleLogIn = e => {
    this.state.toggleLogInText === 'Log In?' ?
      this.setState({ signOrLog: 'login', toggleLogInText: 'Sign Up?' }) :
      this.setState({ signOrLog: 'signup', toggleLogInText: 'Log In?' });
  }

  render(){
    const { signOrLog, toggleLogInText } = this.state;
    const { handleSubmit, toggleLogIn } = this;
    
    return (
      <header className='header'>
        <h1 className='header-title'><Link to='/'>Simply Living Light</Link></h1>
      </header>
    )
  }
}

export default Header;
