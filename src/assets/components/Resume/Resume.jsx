import React from 'react'
import './Resume.css'
export default function Resume(props) {
  return(
    <div className="resume-box">
            <div className='resume-svg-container'>
                {props.svg}
            </div>
            <p className="resume-text">
                {props.paragraph}
            </p>
    </div>
    )
}