import React, { Component, Fragment } from 'react';
import axios from 'axios';

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
  }

  render(){
    const { username } = this.state;
    
    return (
      <Fragment>
        <div className="banner">
        <div className='banner-overlay' id='bannerOverlay'></div>
          <div className='banner-title' id='bannerTitle'>
            <h2>Simply Living Light</h2>
          </div>
        </div>
        
        <div className="center-piece">
          <h1 className='center-piece-sub-title'>A Blog About</h1>
          <article className="center-piece-1">
            <h1 className='center-piece-title'>Living</h1>
            <p className="center-piece-description">life consciously</p>
          </article>
          <article className="center-piece-2">
            <p className="center-piece-description"></p>
            <h1 className='center-piece-title'>Life</h1>
          </article>
          <article className="center-piece-3">
            <h1 className='center-piece-title'>Simply</h1>
            <p className="center-piece-description"></p>
          </article>
        </div>
        
        <div className="projects">
          <h1>Projects</h1>
          <div>
            <article>
              <h2 className='projects-title'>01</h2>
              <p className="projects-date">16  /  03  /  2016</p>
              <p className="projects-description">Living: Traveling light/Trip to Colorado (Luisa Blog entry)</p>
            </article>
            <article>
              <h2 className='projects-title'>02</h2>
              <p className="projects-date">01  /  02  /  2017</p>
              <p className="projects-description">Simply: Year 1 of the journey into rearing your own flock</p>
            </article>
            <article>
              <h2 className='projects-title'>03</h2>
              <p className="projects-date">27  /  09  /  2023</p>
              <p className="projects-description">Life: Working girl's tips to balancing comfort with style</p>
            </article>
          </div>
        </div>
      </Fragment>
    )
  }
}
export default Home;