import React from 'react'
import { Link } from 'react-router-dom'
import pic1 from './Images/svg-1.svg'
import './UnlimitedTrans.css'

export default function UnlimitedTrans() {
  return (
    <div className="container-of-unlimited-transaction">
        <div className='sub-container-of-unlimited-transaction'>
            <div>
                <h5>Exclusive Access</h5>
                <h1>Unlimited Transactions With Zero Fees</h1>
                <p>Get Access To Our Exclusive Platinum Card That Allows You To Send Unlimited Transactions Without Getting Charged Any Fees.</p>
                <Link to="/products" className='get-started-btn-of-unlimited-trans'>Get Started</Link>
            </div>
            <img src={pic1} alt="" style={{width: "34rem"}}/>
        </div>
    </div>
  )
}
