import React, { Component, Fragment } from 'react';

class Contact extends Component {
  state = {
    
  }

  render(){
    return (
      <Fragment>
        <h1>BE IN TOUCH</h1>
        
        <form>
          <div>
            <input type="text" name='name' placeholder='Name *'/>
            <input type="email" name='email' placeholder='Email *'/>
          </div>
          <input type="text" name='subject' placeholder='Subject'/>
          <textarea name="message" cols="30" rows="10" placeholder='Message'></textarea>
          <button>Send</button>
        </form>
      </Fragment>
    )
  }
}

export default Contact;