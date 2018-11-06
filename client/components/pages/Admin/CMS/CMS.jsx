import React, { Component } from 'react';
import Posts from './Posts';
import CreatePost from './CreatePost';
import Nav from './Nav';

class CMS extends Component {
  state = {
    
  }
  
  render() {
    return (
      <div className='admin-cms'>
        <Nav />
        <Posts />
        <CreatePost />
      </div>
    );
  }
}

export default CMS;