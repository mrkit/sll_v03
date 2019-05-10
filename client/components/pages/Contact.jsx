import React, { Component, Fragment } from 'react';
import axios from 'axios';

class Contact extends Component {
  state = {
    responseMessage: ''
  }

  handleSubmit = e => {
    e.preventDefault();
    const { name, email, subject, message } = e.target;
    
    axios.post('/api/contact', { name: name.value, email: email.value, subject: subject.value, message: message.value })
    .then(res => res.data)
    .then(responseMessage => this.setState({ responseMessage }))
    .catch(err => console.log(`Axios Post Contact error ${err.message}`));

    e.target.name.value = '';
    e.target.email.value = '';
    e.target.subject.value = '';
    e.target.message.value = '';
  }

  render(){
    const { handleSubmit } = this;

    return (
      <div className='contact-page'>
        <h1>BE IN TOUCH</h1>
        { this.state.responseMessage ? <h2 className='contact-page-response-message'>Success {this.state.responseMessage}</h2> : null }
        <form className='contact-page-form' onSubmit={handleSubmit}>
          <div>
            <input type="text" name='name' placeholder='Name *' autoComplete='off' autoFocus/>
            <input type="email" name='email' placeholder='Email *' autoComplete='off' />
          </div>
          <input type="text" name='subject' placeholder='Subject' autoComplete='off'/>
          <textarea name="message" cols="30" rows="5" placeholder='Message'></textarea>
          <button>Send</button>
        </form>
      </div>
    )
  }
}

export default Contact;