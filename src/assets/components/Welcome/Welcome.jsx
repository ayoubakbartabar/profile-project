import React from 'react'
import './Welcome.css'
export default function Welcome() {
  return (
    <div className='Welcome-container'>
        <h2 className="welcome-title">welcome to my web development protofolio!</h2>
        <h4 className="welcome-paragraph">I'm Lily Smith, a passionate web developer based in USA. Here, you 'll get a glimpse of my journey in the world of web development, where creativity meets functionality.</h4>
        <div className="email-input-container">
            <label htmlFor="">your email</label>
            <div className='input-button'>
                <input required className='header-email-input' type="email" placeholder='Enter your email'/>
                <button className='require-btn'>require offer</button>
            </div>

        </div>
    </div>
  )
}
