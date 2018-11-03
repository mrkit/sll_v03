import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {

  handleLoginForm = e => {
    e.preventDefault();
    const { username, password } = e.target;
    const { handleLogin } = this.props;
    axios.post('/api/auth/login', { username: username.value, password: password.value})
    .then(res => res.data)
    .then(token => localStorage.setItem('bizken', token))
    .then(() => handleLogin())
    .catch(err => console.log(`Axios Admin Login Error: ${err.message}`));

    e.target.username.value = '';
    e.target.password.value = '';
  }

  render() {
    const { handleLoginForm } = this;

    return (
        <form className='admin-login' onSubmit={handleLoginForm}>
          <input type='text' name='username' autoFocus placeholder='Login'/>
          <input type='password' name='password' placeholder='Password'/>
          <button>Submit</button>
        </form>
    );
  }
}

export default Login;