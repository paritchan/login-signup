
import React, { useEffect, useState } from "react";
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import driving_icon from '../Assets/driving.png'
import permit_icon from '../Assets/dl.png'



const LoginSignup = () => {
  const [action,setAction] = useState("Sign Up");
  return (
 <div className='container-login'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
      <div className ="inputs">
        {action === "Login"?<div></div>:<div className="input">
            <img src={user_icon} alt="user" />
            <input type="text" placeholder="Name" id="n1"/>
        </div>}
        <div className="input">
            <img src={email_icon} alt="email" />
            <input type="email" placeholder="email-id" id="n2"/>
        </div>
        <div className="input">
            <img src={password_icon} alt="password" />
            <input type="password" placeholder="password contain number(s) & special chars" id="n3" />
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
      <div className="final-submit">
      <button class="button button1" onclick="validateFunction()">Submit  </button> 
      </div>
    </div>
  );
}

export default LoginSignup
