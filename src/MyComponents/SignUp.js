import React from 'react'
import pic6 from './Images/svg-6.svg'
import pic7 from './Images/svg-4.svg'
import { Link } from 'react-scroll'
import { useState } from 'react'
import './SignUp.css'
import swal from 'sweetalert'
import { useRef } from 'react'

export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname,setLname] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPass,setConfirmPass] = useState("");

  const [type1,setType1] = useState("password");
  const [icon1, setIcon1] = useState("fa-solid fa-eye-slash");

  const [type2,setType2] = useState("password");
  const [icon2,setIcon2] = useState("fa-solid fa-eye-slash");

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  let fnameCheck = /^[A-Za-z ]{3,20}$/;
  let lnameCheck = /^[A-Za-z ]{3,20}$/;
  let emailCheck = /^[A-Za-z0-9_]{3,30}@[A-Za-z]{3,8}.com$/;
  let passwordCheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&]{8,20}$/;

  const changeFirstName = (e) => {
      if (e.target.value === "")
      {
        setFname("");
      }
      else if (fnameCheck.test(e.target.value))
      {
        setFname(true);
      }
      else
      {
        setFname(false);
      }
  }

  const changeLastname = (e) => {
    if (e.target.value === "")
    {
      setLname("");
    }
    else if (lnameCheck.test(e.target.value))
    {
      setLname(true);
    }
    else
    {
      setLname(false);
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

  const changePassword = (e) => {
    if (e.target.value === "")
    {
      setPassword("");
    }
    else if (passwordCheck.test(e.target.value))
    {
      setPassword(true);
    }
    else
    {
      setPassword(false);
    }
  }

  const changeConfirmPassword = (e) => {
    if (e.target.value === "")
    {
      setConfirmPass("");
    }
    else if (e.target.value === ref4.current.value)
    {
      setConfirmPass(true);
    }
    else
    {
      setConfirmPass(false);
    }
  }

  const createAccount = () => {
    swal('Congratulations!', 'Your Account Has Been Created Successfully.', 'success');
    setFname("");
    setLname("");
    setEmail("");
    setPassword("");
    setConfirmPass("");
    ref1.current.value = "";
    ref2.current.value = "";
    ref3.current.value = "";
    ref4.current.value = "";
    ref5.current.value = "";
  }

  const changeEyeIcon1 = () => {
    if (type1 === "password" && icon1 === "fa-solid fa-eye-slash")
    {
      setType1("text");
      setIcon1("fa-solid fa-eye");
    }
    else
    {
      setType1("password");
      setIcon1("fa-solid fa-eye-slash");
    }
  }

  const changeEyeIcon2 = () => {
    if (type2 === "password" && icon2 === "fa-solid fa-eye-slash")
    {
      setType2("text");
      setIcon2("fa-solid fa-eye");
    }
    else
    {
      setType2("password");
      setIcon2("fa-solid fa-eye-slash");
    }
  }

  return (
    <>
      <div className='container-of-sign-up'>
          <div className="sub-container">
              <div className="text-and-btn-of-sign-up">
                  <h5>Sign Up Today</h5>
                  <h1 style={{marginBottom: "0px"}}>Join Today To Receive An Exclusive Offer</h1>
                  <p>Get Access To Our Exclusive Platinum Card That Allows You To Send Unlimited Transactions Without Getting Charged Any Fees.
                  </p>
                  <Link to="sign-up-form" spy={true} smooth={true} offset={-150} duration={500} className="sign-up-link">Sign Up</Link>
              </div>
              <img src={pic6} alt="" style={{width: "36.5rem"}}/>
          </div>
      </div>

      <div className="signup-form" id='sign-up-form'>
        <form autoComplete='off'>
          <div className='signup-form-headings-div'>
            <h2>LAVISH</h2>
            <h4>Create Your Account</h4>
          </div>
          <div className="mb-3">
            <input ref={ref1} onChange={changeFirstName} type="text" className="form-control input-of-sign-up-form" aria-describedby="emailHelp" placeholder='First Name' id={fname === "" ? "null": fname === true ? "success": "failure"}/>
          </div>
          <div className="mb-3">
            <input ref={ref2} onChange={changeLastname} type="text" className="form-control input-of-sign-up-form" placeholder='Last Name' id={lname === "" ? "null": lname === true ? "success": "failure"}/>
          </div>
          <div className="mb-3">
            <input ref={ref3} onChange={changeEmail} type="email" className="form-control input-of-sign-up-form" placeholder='Email Address' id={email === "" ? "null": email === true ? "success": "failure"}/>
          </div>
          <div className="mb-3" style={{position: "relative"}}>
            <input ref={ref4} onChange={changePassword} type={type1} className="form-control input-of-sign-up-form" placeholder='Password' id={password === "" ? "null": password === true ? "success": "failure"}/>
            <i className={icon1} onClick={changeEyeIcon1} style={{position: "absolute", top: "10px", right: "12px", fontSize: "18px", cursor: "pointer"}}></i>
          </div>
          <div className="mb-3" style={{position: "relative"}}>
            <input ref={ref5} onChange={changeConfirmPassword} type={type2} className="form-control input-of-sign-up-form" placeholder='Confirm Password' id={confirmPass === "" ? "null": confirmPass === true ? "success": "failure"}/>
            <i className={icon2} onClick={changeEyeIcon2} style={{position: "absolute", top: "10px", right: "12px", fontSize: "18px", cursor: "pointer"}}></i>
          </div>
          {
            (fname === "" || lname === "" || email === "" || password === "" || confirmPass === "") ? <button type="button" className="btn btn-primary btn-for-create-account" disabled={true}>Create Account</button>: <button type="button" className="btn btn-primary btn-for-create-account" onClick={createAccount} disabled={false}>Create Account</button>
          }
        </form>

        <div className="img-of-signup-form">
          <img src={pic7} alt=""/>
        </div>
      </div>
    </>
  )
}
