import React from 'react'
import './Projects.css'

export default function Projects(props) {
  return (
    <div className='project-box'>
        <img src={props.image} alt={props.title} />
        <h2 className="project-title">{props.title}</h2>
        <p className="project-pragraph">{props.paragraph}</p>
        <button className='see-detail'>See Details</button>
    </div>
  )
}
