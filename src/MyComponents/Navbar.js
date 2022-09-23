import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <div className='div-of-logo-and-name'>
                    <i className="fa-solid fa-fingerprint navbar-fingerprint"></i>
                    <Link className="navbar-brand name-of-navbar-brand" to="/">LAVISH</Link> 
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{border: "2px solid white"}}>
                    <i className="fa-solid fa-bars" style={{color: "white"}}></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{alignItems: "center"}}>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/about-us">About Us</Link>
                        </li>
                        <li className="nav-item" id='contact-us-link'>
                            <Link className="nav-link active" aria-current="page" to="/contact">Contact Us</Link>
                        </li>
                        <li className="nav-item" style={{textAlign: "center"}}>
                            <Link to="/sign-up" className='sign-up-link-of-navbar'>SIGN UP</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
