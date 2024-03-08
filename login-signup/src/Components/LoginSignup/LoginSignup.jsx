
import React, { useEffect, useState } from "react";
import './LoginSignup.css'


import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import driving_icon from '../Assets/driving.png'
import permit_icon from '../Assets/dl.png'


const LoginSignup = () => {
  const [action,setAction] = useState("Sign Up");
  const [Name, setName] = useState('') // useState to store First Name
  const [NameError, setNameError] = useState('') // useState to store First Name
  const [email, setEmail] = useState('') // useState to store Email address of the user
  const [emailError, setEmailError] = useState('') // useState to store Email address of the user
  const [password, setPassword] = useState('') // useState to store Password
  const [passwordError, setPasswordError] = useState('') // useState to store Password
  const npattern = new RegExp(/^\d{1,10}$/); //numbers only pattern
  const passwordPattern = new RegExp(/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,20}$/);//password pattern
  const emailpattern = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/); //email check pattern
  const [value,setValue] = useState("Passenger");
 

  // Function which will validate the input data whenever submit button is clicked.

   function validateForm() {
    //clear previous error msgs
    setNameError("");
    setEmailError("");
    setPasswordError("");
    
     // Check if the First Name is an Empty string or not.
     if (Name.length === 0) {
      setNameError('Invalid Form,  Name can not be empty')
    }

    if (!passwordPattern.test(password)) {
      setPasswordError("Password requirements: 2-20 characters, 1 number, 1 letter, 1 symbol. @ symbol mandatory");
      return;
      }
    if (!emailpattern.test(password)) {
        setEmailError("Email requirements: 4-20 characters, 1 number, 1 letter, 1 symbol.");
        return;
      }
    if(NameError)
    alert(
      "Error in Name !\n " + NameError 
      );
    if(emailError)
      alert(
        "Error in email !\n " + emailError 
        );
    if(passwordError)
        alert(
          "Error in password !\n " + passwordError 
          );
      alert(
        "Registration successful!\nEmail: " + email + "\nPassword: " + password
        );
 }

  return (
 <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
      <div className ="inputs">
        {action === "Login"?<div></div>:<div className="input">
            <img src={user_icon} alt="user" />
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/><br></br>
        </div>}
        <div className="input">
            <img src={email_icon} alt="email" />
            <input type="email" placeholder="email-id" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="input">
            <img src={password_icon} alt="password" />
            <input type="password" placeholder="password[contain number(s),special chars]"  onChange={(e) => setPassword(e.target.value)}/>
        </div>
        {action ==="Login"?<div></div>:        <div className="input">
            <img src={driving_icon} alt="Driving license" />
            <input type="DL_num" placeholder="Driving License of rider" id="n4" />
        </div>}
        {action ==="Login"?<div></div>:  
        <div className="input">
        <img src={permit_icon} alt="Permit" />
            <input type="Permit" placeholder="Permit of Driver"  id="n5"/>
        </div>}
        
      </div>
      {action ==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password?<span>Click Here</span></div>}
      
      <div className="submit-container">
      <div className={action==="Login"? "submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
         <div className={action==="Sign Up"? "submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>  
      </div>
      <br></br>
      <div className="submit-form">
      <label>Passenger<input type ="radio" value ="Passenger" checked={value === "Passenger"}onChange={(e) => setValue(e.target.value)}/></label>
      <label>Driver<input type ="radio" value ="Driver" checked={value === "Driver"}onChange={(e) => setValue(e.target.value)}/></label>
      </div>
      <div className="final-submit">
      <div className="submitform" onClick={()=>{validateForm()}}>Submit</div>
      </div>
    </div>
  );
}

export default LoginSignup
