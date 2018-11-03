import React, { Component } from 'react';
import Posts from './Posts';
import CreatePost from './CreatePost';

class CMS extends Component {
  render() {
    return (
      <div className='admin-cms'>
        <Posts />
        <CreatePost />
      </div>
    );
  }
}

export default CMS;