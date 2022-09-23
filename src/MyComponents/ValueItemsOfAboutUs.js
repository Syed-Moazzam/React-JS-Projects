import React from 'react'
import './ValueItemsOfAboutUs.css'

export default function ValueItemsOfAboutUs({eachObject}) {
  return (
    <div className='box-of-value-items'>
        <i className={eachObject.icon}></i>
        <h1>{eachObject.name}</h1>
        <p>{eachObject.description}</p>
    </div>
  )
}
