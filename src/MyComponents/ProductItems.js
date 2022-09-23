import React from 'react'
import './ProductItems.css'

export default function ProductItems({eachObject}) {
  return (
    <div className='box-of-products'>
        <i className={eachObject.icon} id="icon-of-products"></i>
        <h4 style={{fontWeight: "bold"}}>{eachObject.packageName}</h4>
        <h1 style={{fontWeight: "bold"}}>{eachObject.price}</h1>
        <h5 style={{marginBottom: "2.5rem", fontSize: "18px"}}>{eachObject.duration}</h5>
        <p>{eachObject.transaction}</p>
        <p>{eachObject.cashBack}</p>
        <p>{eachObject.limit}</p>
        <button className='choose-plan-btn-of-products'>Choose Plan</button>
    </div>
  )
}
