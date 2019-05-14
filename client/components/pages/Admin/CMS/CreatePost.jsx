import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import dateStamp from '../../../../helperFunctions/dateStamp';
import { thunkCreatePost } from '../../../../store';

class CreatePost extends Component {
  state = {
    posts: []
  }

  componentDidMount(){
    
  }

  render() {
    const { handleCreatingPost } = this.props;

    return (
      <div className='admin-cms-create-post'>
        <h2>Create New Post:</h2>
        <form className='admin-cms-create-post-form' onSubmit={handleCreatingPost}>
          <input type='text' name='title' placeholder='Title' autoFocus autoComplete='off'/>
          <textarea name='article' cols="30" rows="10"></textarea>
          <button>Create new post</button>
        </form>
      </div>
    );
  }
}

const mapState = state => ({
  posts: state.posts
});

const mapDispatch = dispatch => ({
    handleCreatingPost(e){
      e.preventDefault();
      const title = e.target.title.value,
            article = e.target.article.value;

      const date = dateStamp();
      const author = 'luisa';

      dispatch(thunkCreatePost({ title, date, author, article }));

      e.target.title.value = '';
      e.target.article.value = '';
   }
});

export default connect(mapState, mapDispatch)(CreatePost);