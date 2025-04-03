import React, { useState } from "react";
import "./NavBar.css";
import Menu from "../Menu/Menu";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="nav-bar-container">
      <h1 className="nav-bar-title">maid by Ayoub</h1>

      <ul className="menu-list">
        <Menu
          svg={<svg className="menu-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M5.566 4.657A4.505 4.505 0 016.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0015.75 3h-7.5a3 3 0 00-2.684 1.657zM2.25 12a3 3 0 013-3h13.5a3 3 0 013 3v6a3 3 0 01-3 3H5.25a3 3 0 01-3-3v-6zM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 016.75 6h10.5a3 3 0 012.683 1.657A4.505 4.505 0 0018.75 7.5H5.25z"></path>
              </svg>}
          href="#"
          title="Page"
        />
        <Menu
          svg={<svg className="menu-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"></path>
              </svg>}
          href="#"
          title="Account"
        />
        <Menu
          svg={<svg className="menu-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"></path>
              </svg>}
          href="https://www.material-tailwind.com/docs/react/installation"
          title="Docs"
        />
      </ul>


      <div className="menu-button-container">
        <button className="sign-in">SIGN IN</button>
        <button className="blocks">BLOCKS</button>
      </div>


      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="mobile-menu-btn"
      >
        <MdOutlineMenu />
      </button>


      <div className={`mobile-menu-container ${isMenuOpen ? "open" : ""}`}>
        <button
          onClick={() => setIsMenuOpen(false)}
          className="close-mobile-menu-btn"
        >
          <IoCloseSharp />
        </button>
        <ul className="mobile-menu-list">
          <li className="mobile-menu-item">
            <a className="mobile-menu-link" href="#">Page</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
