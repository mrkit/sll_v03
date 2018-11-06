import React, { Component } from 'react';
import axios from 'axios';

class Posts extends Component {
  state = {
    posts: []
  }

  componentDidMount(){
    axios.get('/api/posts')
    .then(res => res.data)
    .then(posts => this.setState({ posts }))

  }
  render() {
    const { posts } = this.state;
    return (
      <div className='admin-cms-posts'>
        <h2>Posts:</h2>
        <ul>
          {
            posts.map(post => (
              <li key={post.id}>{post.date}  |  <strong>{post.title}</strong></li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Posts;