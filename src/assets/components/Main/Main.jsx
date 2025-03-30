import React from 'react'
import './Main.css'
import MyClient from '../MyClient/MyClient'
import MySkills from '../MySkills/MySkills.jsx'
import MyProjects from '../MyProjects/MyProjects.jsx'
import MyResume from '../MyResume/MyResume.jsx'
import ClientSay from '../ClientSay/ClientSay.jsx'
import PopularClients from '../PopularClients/PopularClients.jsx'
import ContactUs from '../ContactUs/ContactUs.jsx'
import Footer from '../Footer/Footer.jsx'

export default function Main() {
  return (
      <main>
        <MyClient/>
        <MySkills/>
        <MyProjects/>
        <MyResume/>
        <ClientSay/>
        <PopularClients/>
        <ContactUs/>
        <Footer/>
      </main>
  )
}
