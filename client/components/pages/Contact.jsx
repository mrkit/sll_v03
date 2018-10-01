import React, { Component, Fragment } from 'react';

class Contact extends Component {
  state = {
    
  }

  render(){
    return (
      <div className='contact-page'>
        <h1>BE IN TOUCH</h1>
        
        <form className='contact-page-form'>
          <div>
            <input type="text" name='name' placeholder='Name *'/>
            <input type="email" name='email' placeholder='Email *'/>
          </div>
          <input type="text" name='subject' placeholder='Subject'/>
          <textarea name="message" cols="30" rows="10" placeholder='Message'></textarea>
          <button>Send</button>
        </form>
      </div>
    )
  }
}

export default Contact;