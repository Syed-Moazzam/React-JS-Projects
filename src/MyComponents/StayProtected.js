import React from 'react'
import './StayProtected.css'
import pic3 from './Images/svg-5.svg'

export default function StayProtected() {
  return (
    <div className='container-of-stay-protected'>
        <div className="sub-container-of-stay-protected">
            <div>
                <h5>100% Secure</h5>
                <h1>Stay Protected 24/7 Anywhere Anytime</h1>
                <p>We Have You Covered No Matter Where You Are Located. Over 140 Locations WorldWide To Ensure You Have Access Anytime.</p>
                <button className="learn-more-btn-of-stay-protected">Learn More</button>
            </div>
            <img src={pic3} alt="" style={{width: "32rem"}}/>
        </div>
    </div>
  )
}
