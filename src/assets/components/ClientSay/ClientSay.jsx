import React from 'react'
import './ClientSay.css'
import ComponentsHeader from '../ComponentsHeader/ComponentsHeader.jsx'
import Clients from '../Clients/Clients.jsx'

export default function ClientSay() {
  return (
    <section className='clients-container'>
        <ComponentsHeader title='What Clients Say' paragraph='Discover what clients have to say about their experiences working with me. My clients satisfaction is my greatest achievement!'/>
        <Clients/>
    </section>
  )
}
