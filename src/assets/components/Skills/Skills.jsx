import React from 'react'
import './Skills.css'

export default function Skills(props) {
  return (
    <div className="skills-box">

        <div className="svg-container">
            {props.svg}
        </div>
        <h1 className="skills-title">{props.title}</h1>
        <p className="skills-paragraph">{props.paragraph}</p>
    </div>

  )
}
