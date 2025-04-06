import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <footer className='footer'>
        <h4 className="copy-right">© 2025 Made with Ayoub .</h4>
        
        <ul className="footer-menu">
            <li className="footer-list"><a className='footer-menu-like' href="#">Home</a></li>
            <li className="footer-list"><a className='footer-menu-like' href="#">About Us</a></li>
            <li className="footer-list"><a className='footer-menu-like' href="#">Blog</a></li>
            <li className="footer-list"><a className='footer-menu-like' href="#">Services</a></li>
            <button className='footer-menu-btn'>Subscribe</button>
        </ul>
    </footer>
  )
}
