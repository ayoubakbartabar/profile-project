import React from 'react'
import './Header.css'
import Welcome from '../Welcome/Welcome'

export default function Header() {
  return (

    <section className='header-container'>
       <Welcome/>
       <img  src='../public/image/avatar1.jpg' alt='Avatar' className='header-image'></img>
    </section>

  )
}
