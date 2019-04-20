import React, { Component } from 'react';
import axios from 'axios';
import { fethPosts } from '../../../../store';

class CreatePost extends Component {
  state = {
    posts: []
  }

  dateStamp = () => {
    const currentDate = new Date(),
      date = currentDate.getDate(),
      month = currentDate.getMonth()+1,
      year = currentDate.getFullYear();

    const pad = month => month < 10 ? '0'+month : month;

    return `${pad(month)}/${date}/${year}`
  }

  handleCreatingPost = e => {
    e.preventDefault();

    const title = e.target.title.value,
          article = e.target.article.value;

    const date = this.dateStamp();
    const author = 'luisa';

    console.log(date);
    axios.post('/api/posts', { title, date,  author, article })
    .then(res => res.data)
    .then(post => this.setState({ posts: [...this.state.posts, post]}))
    .catch(err => `Axios create post error ${err.message}`)
    

    e.target.title.value = '';
    e.target.author.value = '';
    e.target.article.value = '';
  }

  render() {
    const { handleCreatingPost } = this;

    return (
      <div className='admin-cms-create-post'>
        <h2>Create New Post:</h2>
        <form onSubmit={handleCreatingPost}>
          <input type='text' name='title' placeholder='Title' autoFocus autoComplete='off'/>
          <textarea name='article' cols="30" rows="10"></textarea>
          <button>Create new post</button>
        </form>
      </div>
    );
  }
}

export default CreatePost;