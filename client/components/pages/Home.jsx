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
        <div className="banner">
          <div className='banner-title'>
            <h2>Simply Living Light</h2>
            <p>A BLOG ABOUT</p>
          </div>
        </div>
        
        <div className="center-piece">
          <article>
            <h1 className='center-piece-title'>Living</h1>
            <p className="center-piece-description">Follow our journey into minimalism and changing perspectives</p>
            <img src="https://images.pexels.com/photos/860487/pexels-photo-860487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Flower"/>
          </article>
          <article>
            <p className="center-piece-description">Tips on traveling, shopping, and living</p>
            <img src="https://images.pexels.com/photos/374898/pexels-photo-374898.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Bedroom"/>
            <h1 className='center-piece-title'>Life</h1>
          </article>
          <article>
            <h1 className='center-piece-title'>Simply</h1>
            <p className="center-piece-description">Journey of self sufficiency through farming, crafting, and enjoying the simple things</p>
            <img src="https://images.pexels.com/photos/158179/lake-constance-sheep-pasture-sheep-blue-158179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Field"/>
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