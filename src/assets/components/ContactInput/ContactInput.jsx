import React from 'react'
import './ContactInput.css'

export default function ContactInput() {
  return (
    <from className='contact-info-input-container'>
        <div className="name-input-container">
            <div className="first-name">
                <input className='name-input' type="text" placeholder='Ayoub'/>
                <label className='name-label' >Fisrt Name</label>
            </div>
            <div className="last-name">
                <input className='name-input' type="text" placeholder='Akbartabar'/>
                <label className='name-label' >Last Name</label>
            </div>
        </div>
        <div className="email-input-container">
            <input className='email-input' type="email" placeholder='ayoubakbartabar1887@mail.com'/>
            <label className='email-label'>Email</label>
        </div>

        <div className="interested-checkbox">
        
            <h3 className="interested-checkbox-title">What are you interested on?</h3>
            
            <div className="check-boxs-container">
                <div className="check-box-container">
                    <label className='checkbox-label'>
                        <input className='checkbox' type="checkbox" name="Design" />
                    </label>
                    <label className='checkbox-title'>Design</label>
                </div>
                <div className="check-box-container">
                    <label className='checkbox-label'>
                        <input className='checkbox' type="checkbox" name="Development" />
                    </label>
                    <label className='checkbox-title'>Development</label>
                </div>
                <div className="check-box-container">
                    <label className='checkbox-label'>
                        <input className='checkbox' type="checkbox" name="Support" />
                    </label>
                    <label className='checkbox-title'>Support</label>
                </div>
                <div className="check-box-container">
                    <label className='checkbox-label'>
                        <input className='checkbox' type="checkbox" name="Other" />
                    </label>
                    <label className='checkbox-title'>Other</label>
                </div>

            </div>
        </div>

        <div className="comment-container">
            
            <input className='comment-input' type='text'></input>
            <label className='comment-label'>Your Message</label>
            
        </div>
        <div className="send-message-btn-container">
            <button className='send-message-btn'>send message</button>
        </div>
    </from>
  )
}
