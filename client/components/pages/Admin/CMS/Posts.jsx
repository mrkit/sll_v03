import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchPosts, thunkDeletePost } from '../../../../store';

class Posts extends Component {

  componentDidMount(){
    this.props.loadPosts();
  }

  render() {
    const { posts } = this.props;
    const { handleUpdate, handleDelete } = this.props;
    
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
const mapState = state => ({
  posts: state.posts
});

const mapDispatch = dispatch => ({
  loadPosts(){
     dispatch(fetchPosts());
  },
  
  handleUpdate(e){
    e.preventDefault();
    console.log('Hello');
  },
  
  handleDelete(e){
    e.preventDefault();
    const id = Number(e.target.id.value);
    
    dispatch(thunkDeletePost(id));
  }
});

export default connect(mapState, mapDispatch)(Posts);