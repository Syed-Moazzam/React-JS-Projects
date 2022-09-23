import React from 'react'
import { useState } from 'react';
import swal from 'sweetalert';
import pic5 from './Images/contact-us.jpeg'
import './ContactUs.css'
import { useRef } from 'react';

export default function ContactUs() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [message, setMessage] = useState("");

    let nameCheck = /^[A-Za-z ]{3,30}$/;
    let emailCheck = /^[A-Za-z0-9_]{3,20}@[A-Za-z]{5,8}.[a-z]{3}$/;
    let mobileCheck = /^03[0-9]{9}$/;

    const changeName = (e) => {
        if (e.target.value === "")
        {
            setName("");
        }
        else if (nameCheck.test(e.target.value))
        {
            setName(true);
        }
        else
        {
            setName(false);
        }
    }

    const changeEmail = (e) => {
        if (e.target.value === "")
        {
            setEmail("");
        }
        else if (emailCheck.test(e.target.value))
        {
            setEmail(true);
        }
        else
        {
            setEmail(false);
        }
    }

    const changeMobile = (e) => {
        if (e.target.value === "")
        {
            setMobile("");
        }
        else if (mobileCheck.test(e.target.value))
        {
            setMobile(true);
        }
        else
        {
            setMobile(false);
        }
    }

    const sendMessage = () =>{
        swal("Success!", "Your Message Has Been Sent!", "success");
        setName("");
        setEmail("");
        setMobile("");
        setMessage("");
        ref1.current.value = "";
        ref2.current.value = "";
        ref3.current.value = "";
        ref4.current.value = "";
    }

  return (
    <div className="container-of-contact">
        <h1>Get In Touch</h1>
        <div className="sub-container-of-contact">
            <img className="img-of-contact-us" src={pic5} alt=""/>
            <form style={{width: "40%"}}>
                <div className="mb-3 input-fields-of-contact-us">
                    <i className="fa-solid fa-user"></i>
                    <input ref={ref1} onChange={changeName} type="text" className="form-control" aria-describedby="emailHelp" placeholder='Enter Your Name' id={name === "" ? "null": name === true ? "success": "failure"}/>
                </div>
                <div className="mb-3 input-fields-of-contact-us">
                    <i className="fa-solid fa-envelope"></i>
                    <input ref={ref2} onChange={changeEmail} type="email" className="form-control" aria-describedby="emailHelp" placeholder='Enter You Email Address' id={email  === "" ? "null": email === true ? "success": "failure" }/>
                </div>
                <div className="mb-3 input-fields-of-contact-us">
                    <i className="fa-solid fa-phone"></i>
                    <input ref={ref3} onChange={changeMobile} type="number" className="form-control" placeholder='Enter You Mobile Number' id={mobile === "" ? "null": mobile === true ? "success": "failure"}/>
                </div>
                <div id="text-area-of-contact-us">
                    <i className="fa-solid fa-comment"></i>
                    <textarea ref={ref4} onChange={(e)=>{setMessage(e.target.value)}} cols="30" rows="10" className="form-control" placeholder="Enter Your Message Here" id={message === "" ? "null": "success"}></textarea>
                </div>
                {
                    (name === "" || email === "" || mobile === "" || message === "") ? <button type="button" className="btn btn-primary" disabled={true}>Submit</button>: <button type="button" className="btn btn-primary" onClick={sendMessage} disabled={false}>Submit</button>
                }
            </form>
        </div>

        <div className='container-div-of-map'>
            <div id="location-div-of-map">
                <div>
                    <i className="fa-sharp fa-solid fa-location-dot"></i>
                    <p>LAVISH INC.</p>
                </div>
                <p>NED University of Engineering And Technology <br/>University Road, Karachi - 75270, Pakistan</p>
            </div>

            <div className="map">
                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14474.552842670242!2d67.0583741!3d24.91031945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1663360723697!5m2!1sen!2s" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
  )
}
