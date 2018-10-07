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
      <header>
        <h1><Link to='/'></Link></h1>

        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              {/*<Link to='/contact'>Contact</Link>*/}
            </li>
          </ul>
        </nav>

        {/*<form className={signOrLog} onSubmit={handleSubmit}>
          <input type='text' name='username' placeholder={signOrLog[0].toUpperCase() + signOrLog.slice(1)} autoFocus autoComplete='off'/>
          <input type='password' name='password' placeholder='Password'/>
          <button>Submit</button>
          <span className='toggleLogIn' onClick={toggleLogIn}>{toggleLogInText}</span>
        </form>*/}
      </header>
    )
  }
}

export default Header;
