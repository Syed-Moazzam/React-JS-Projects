import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <div className='container-of-footer'>
        <div className='upper-div-of-footer'>
            <h3>Join Our Exclusive Membership To Receive The Latest News and Trends</h3>
            <h5>You Can Unsubscribe At Any Time.</h5>
            <div className="div-of-subscribe-of-footer">
                <input type="text" placeholder='Your Email' style={{padding: "4px 8px", outline: "none"}}/>
                <button className='subscribe-btn-of-footer'>Subscribe</button>
            </div>
        </div>

        <div className='lower-div-of-footer'>
            <div className="about-us-footer">
                <h4>About Us</h4>
                <p>How It Works</p>
                <p>Our Story</p>
                <p>Our Values</p>
                <p>Our Culture</p>
            </div>

            <div className="contact-us-footer">
                <h4>Contact Us</h4>
                <p>Contact</p>
                <p>Support</p>
                <p>Destinations</p>
                <p>Sponsorships</p>
            </div>

            <div className="videos-footer">
                <h4>Videos</h4>
                <p>Submit Video</p>
                <p>Ambassadors</p>
                <p>Agency</p>
                <p>Influencer</p>
            </div>

            <div className="social-media-footer">
                <h4>Social Media</h4>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Youtube</p>
                <p>Twitter</p>
            </div>
        </div>

        <footer className='footer'>
            <div className='div-of-logo-and-name-in-footer'>
                <i className="fa-solid fa-fingerprint footer-fingerprint"></i>
                <Link className="navbar-brand name-of-footer-brand" to="/">LAVISH</Link> 
            </div>

            <div className='div-of-copyright-in-footer'>LAVISH &copy; 2022</div>

            <div className='div-of-social-media-icons-in-footer'>
                <Link to="//www.facebook.com" target="_blank"><i className='fa-brands fa-facebook'></i></Link>
                <Link to="//www.instagram.com" target="_blank"><i className='fa-brands fa-instagram'></i></Link>
                <Link to="//www.youtube.com" target="_blank"><i className='fa-brands fa-youtube'></i></Link>
                <Link to="//www.twitter.com" target="_blank"><i className='fa-brands fa-twitter'></i></Link>
            </div>
        </footer>
    </div>
  )
}
