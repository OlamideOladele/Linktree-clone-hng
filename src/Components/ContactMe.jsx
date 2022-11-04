import React from 'react'
import Footer from './Footer';

function ContactMe() {
  return (
    <div className='contact container'>
      <div className='contact_container'>
        <h1>Contact Me</h1>
        <p>Hey there, I would love to hear your thoughts.</p>
        <form>
          <div className='names'>
            <div className='firstName'>
              <label htmlFor='name'>First name</label>
              <input
                type='text'
                id='first_name'
                placeholder='Enter your first name'
                className='first_name'
              />
            </div>
            <div className='lastName'>
              <label htmlFor='lastName'>Last name</label>
              <input
                type='text'
                id='last_name'
                placeholder='Enter your last name'
              />
            </div>
          </div>
          <div className='email'>
            <label htmlFor='email'>Email</label>
            <input 
            type='email' 
            id='email' 
            placeholder='Enter your email address' />
          </div>
          <div className='message'>
            <label htmlFor='message'>Message</label>
            
            {/* <input */}
              <textarea
              type='text'
              id='message'
              placeholder='Your Feedback...'>
              </textarea>
            {/* /> */}
            
          </div>
          <div className='button'>
            <button id='btn__submit'>Send message</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};




export default ContactMe;