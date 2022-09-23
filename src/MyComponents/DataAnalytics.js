import React from 'react'
import pic4 from './Images/svg-8.svg'
import { Link } from 'react-router-dom'
import './DataAnalytics.css'

export default function DataAnalytics() {
  return (
    <div className='container-of-data-analytics'>
        <div className="sub-container-of-data-analytics">
            <img src={pic4} alt="" style={{width: "36rem"}}/>
            <div>
                <h5>Data Analytics</h5>
                <h1>Every Transaction Is Stored On Our Secure Cloud Database.</h1>
                <p>You Never Have To Worry Again About Saved Reciepts. We Store Your Data, So You Can Access It Anytime.</p>
                <Link to="/sign-up" className="sign-up-link-of-data-analytics">Sign Up Now</Link>
            </div>
        </div>
    </div>
  )
}
