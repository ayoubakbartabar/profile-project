import React from 'react'
import './Menu.css'


export default function Menu(props) {
  
  return (
    
    <i className="list">{props.svg}<a className='menu-link' href={props.href}>{props.title}</a></i>    
    
  )
}
