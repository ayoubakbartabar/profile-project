import React from 'react'
import './ContactUs.css'
import ComponentHeader from '../ComponentsHeader/ComponentsHeader.jsx'
import ContactInput from '../ContactInput/ContactInput.jsx'

export default function ContactUs() {
  return (
    <section className='contact-us-container'>
        <ComponentHeader title='Contact Us' paragraph='Ready to get started? Feel free to reach out through the contact form, and lets embark on a journey of innovation and success.'/>
        <div className="contact-info-container">
            <div className="contact-info-content">
                <h4 className="contact-info-title">Contact Information</h4>
                <p className="contact-info-paragraph">Fill up the form and our Team will get back to you within 24 hours.</p>
                <div className="contact-info-communication-methods-container">

                    <div className="contact-info-communication-methods">
                        <div className="contact-info-communication-methods-svg-container">
                            <svg className='contact-info-communication-methods-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" ><path d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"></path></svg>
                        </div>
                        <h6 className="communication-methods">(+98) 09016181887</h6>
                    </div>
                    <div className="contact-info-communication-methods">
                        <div className="contact-info-communication-methods-svg-container">
                            <svg className='contact-info-communication-methods-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" ><path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"></path><path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"></path></svg>
                        </div>
                        <h6 className="communication-methods">ayoubakbartabar1887@gmail.com</h6>
                    </div>
                    <div className="contact-info-communication-methods">
                        <div className="contact-info-communication-methods-svg-container">
                            <svg className='contact-info-communication-methods-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path  d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 01-.375.65 2.249 2.249 0 000 3.898.75.75 0 01.375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 17.625v-3.026a.75.75 0 01.374-.65 2.249 2.249 0 000-3.898.75.75 0 01-.374-.65V6.375zm15-1.125a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0v.75a.75.75 0 001.5 0v-.75zm-.75 3a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-.75zM6 12a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H6.75A.75.75 0 016 12zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"></path></svg>
                        </div>
                        <h6 className="communication-methods">Open Support Ticket</h6>
                    </div>

                </div>
            </div>
            <section className="contact-info-input-section">
                <ContactInput/>
            </section>
        </div>
    </section>
  )
}
