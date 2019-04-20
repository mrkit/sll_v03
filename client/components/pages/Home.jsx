import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchPosts } from '../../store';

class Home extends Component {
  state = {
    username: 'Guest'
  }

  componentDidMount(){
    const bannerOverlay = document.getElementById('bannerOverlay');
    const bannerTitle = document.getElementById('bannerTitle');
    bannerTitle.addEventListener('mouseover', function(){
      bannerOverlay.style.backgroundColor = 'rgba(50, 48, 62, 0.776)';
      bannerOverlay.style.transition = 'all 1s';
    });

    bannerTitle.addEventListener('mouseout', function(){
      bannerOverlay.style.backgroundColor = 'rgba(50, 48, 62, 0)';
      bannerOverlay.style.transition = 'all 2s';
    })

    const main = document.querySelector('main');
    
    const { username } = this.state;
    
    axios.get('/api/auth/secret')
    .then(res => res.data)
    .then(username => this.setState({ username }))
    .catch(err => console.log(`Axios Get Secret error: ${err.message}`));
    
    this.props.loadPosts();
  }

  render(){
    const { username } = this.state;
    const { posts } = this.props;
    return (
      <Fragment>
        <div className="banner">
          <div className='banner-overlay' id='bannerOverlay'></div>
          <div className='banner-title' id='bannerTitle'>
            <h2>Simply Living Light</h2>
          </div>
        </div>
        
        <div className="posts">
         {
            posts.map(post => (
              <article className='post' key={post.id}>
                <h2 className='post-title'>{post.title}</h2>
                <div className='post-metadata'>
                  <p className="post-metadata-date">{post.date}</p>
                  <p className="post-metadata-author">{post.author}</p>
                </div>
                <p className="post-description">{post.article}</p>
              </article>
            ))
          }
          
        </div>
      </Fragment>
    )
  }
}

const mapState = state => { 
  console.log('State posts', state.posts)
  return { posts: state.posts }
};

const mapDispatch = dispatch => ({
  loadPosts(){dispatch(fetchPosts())}
});

export default connect(mapState, mapDispatch)(Home);