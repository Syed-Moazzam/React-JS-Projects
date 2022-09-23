import React from 'react'
import './IntroOfAboutUs.css'

export default function IntroOfAboutUs() {
  return (
    <div className="intro">
        <div className="icon">
            <i className="fa-solid fa-fingerprint"></i>
            <p>LAVISH</p>
        </div>

        <div className='text-of-intro'>
            <h1>WE ARE <span>LAVISH</span></h1>
            <p>Helping People Manage Their Transactions Online With Zero Fees!</p>
        </div>
    </div>
  )
}
