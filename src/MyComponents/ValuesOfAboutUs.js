import React from 'react'
import ValueItemsOfAboutUs from './ValueItemsOfAboutUs'
import valuesArray from './ValuesArray'
import './ValuesOfAboutUs.css'

export default function ValuesOfAboutUs() {
  return (
    <div className='container-of-values-of-about-us'>
        <h1>Our Values</h1>
        <p>For Many Years, Helping Out Customers To Make Unlimited Transactions Has Been At The Heart Of What We Do And Why We Do It!. We Live And Breathe Our Six Core Values — Which Speak Of Our Commitment To Our Customers, Staff, The Industry And Our Business As A Whole.</p>
        <div className="sub-container-of-values-of-about-us">
            {valuesArray.map((eachObject)=>{
                return <ValueItemsOfAboutUs eachObject={eachObject} key={eachObject.name}/>
            })}
        </div>
    </div>
  )
}
