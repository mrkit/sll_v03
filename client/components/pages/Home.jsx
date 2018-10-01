import React, { Component, Fragment } from 'react';
import axios from 'axios';

class Home extends Component {
  state = {
    username: 'Guest'
  }

  componentDidMount(){
    const main = document.querySelector('main');
    
    const { username } = this.state;
    
    axios.get('/api/auth/secret')
    .then(res => res.data)
    .then(username => this.setState({ username }))
    .catch(err => console.log(`Axios Get Secret error: ${err.message}`));
  }

  render(){
    const { username } = this.state;
    
    return (
      <Fragment>
        <div className='jumbo'>
          <h2>Simply Living Light</h2>
          <p>A BLOG ABOUT</p>
        </div>
      </Fragment>
    )
  }
}
export default Home;