import React from 'react'
import './ComponentsHeader.css'

export default function ComponentsHeader(props) {
  return (
    <div className='component-header-container'>
        
        <p className="component-header">{props.header}</p>

        <h2 className="component-title">{props.title}</h2>

        <p className="component-paragraph">{props.paragraph}</p>

    </div>
  )
}
