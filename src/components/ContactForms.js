import React from 'react'
import '../style/contactform.css'
import image from '../assets/1.jpg'
function ContactForms() {
  return (
    <div className='top'><div className='Hadings'><h1>Contact</h1></div>
    <div className='mains'>
        <div className='rs' style={{backgroundImage:`ur(${image})`}}><img src={image}/></div>
        <div className='ls'>
            <form className='formes'>
              <label htmlFor='name'><h2>Full Name</h2></label>
              <input name='name' placeholder='Enter Your Full Name' type='text'/>
              <label htmlFor='Email'><h2>Email</h2></label>
              <input name='Email' placeholder='Enter Your Full Email' type='email'/>
              <label htmlFor='number'><h2>Contact</h2></label>
              <input name='name' placeholder='Enter Your Full Contact' type='text'/>
              <label htmlFor='Massage'><h2>Massage</h2></label>
              <textarea rows='8'></textarea>


            </form>
        </div>

    </div></div>
  )
}

export default ContactForms