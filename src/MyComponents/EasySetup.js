import React from 'react'
import { Link } from 'react-router-dom'
import './EasySetup.css'
import pic2 from './Images/svg-7.svg'

export default function EasySetup() {
  return (
    <div className="container-of-easy-setup">
        <div className="sub-container-of-easy-setup">
            <img src={pic2} alt="" style={{width: "36rem"}}/>
            <div>
                <h5>Easy Setup</h5>
                <h1>Super Fast And Simple Onboarding Process</h1>
                <p>Get Everything Set Up Ready In Under 10 Minutes. All You Need To Do Is Add Your Information And You Are Ready To Go.</p>
                <Link to="/sign-up" className="easy-setup-start-now-btn">Start Now</Link>
            </div>
        </div>
    </div>
  )
}
