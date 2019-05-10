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

  handleUpdate = e => {
    e.preventDefault();
  }
  
  handleDelete = e => {
    e.preventDefault();
    const id = Number(e.target.id.value);
    
    axios.delete(`/api/auth/${id}`)
    .then(res => res.data)
    .then(id => this.setState({ posts: posts.filter(post => post.id !== id)}))
    .catch(err => console.log(`Axios delete error ${err.message}`));
  }
  
  render() {
    const { posts } = this.state;
    const { handleUpdate, handleDelete } = this;
    
    return (
      <div className='admin-cms-posts'>
        <h2>Posts:</h2>
        <ul className='admin-cms-posts-ul'>
          {
            posts.map(post => (
              <li key={post.id} className='admin-cms-posts-ul-li'>
                <div>{post.date}  |  <strong>{post.title}</strong></div>
                <form onSubmit={handleUpdate}>
                  <input type="hidden" value={post.id} name="id"/>
                  <button>Update</button>
                </form>
                <form onSubmit={handleDelete}>
                  <input type="hidden" value={post.id} name="id"/>
                  <button>Delete</button>
                </form>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Posts;