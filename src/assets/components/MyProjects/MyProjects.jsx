import React from 'react'
import './MyProjects.css'
import Projects from '../Projects/Projects'
import ComponentsHeader from '../ComponentsHeader/ComponentsHeader.jsx'
export default function MyProjects() {
  return (
    <section className='my-project-section'>
          
          <ComponentsHeader title='My Projects' paragraph='Whether you have a mobile app idea that needs to come to life or a website that requires a facelift, Im here to turn your digital dreams into reality.'/>
          <section className='projects-box-container'>
                <Projects image='../public/image/project1.svg' paragraph='Mobile app designed to help users discover and explore local restaurants and cuisines.' title="Mobile App Development"/>
                <Projects image='../public/image/project2.svg' paragraph='Promotional landing page for a fitness website Summer Campaign. Form development included.' title="Landing Page Development"/>
                <Projects image='../public/image/project3.svg' paragraph='Mobile app designed to help users discover and explore local restaurants and cuisines.' title="Mobile App Development"/>
                <Projects image='../public/image/project4.svg' paragraph='Ecommerce website offering access to the latest and greatest gadgets and accessories.' title="E-commerce Development"/>
                <Projects image='../public/image/project1.svg' paragraph='Mobile app designed to help users discover and explore local restaurants and cuisines.' title="Mobile App Development"/>
                <Projects image='../public/image/project2.svg' paragraph='Promotional landing page for a fitness website Summer Campaign. Form development included.' title="Landing Page Development"/>
                <Projects image='../public/image/project3.svg' paragraph='Mobile app designed to help users discover and explore local restaurants and cuisines.' title="Mobile App Development"/>
                <Projects image='../public/image/project4.svg' paragraph='Ecommerce website offering access to the latest and greatest gadgets and accessories.' title="E-commerce Development"/> 
          </section>
    </section>
  )
}
