
import React, { useEffect, useState } from "react";
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import driving_icon from '../Assets/driving.png'
import permit_icon from '../Assets/dl.png';
import { Button } from "react-bootstrap";
import { signUp,login } from "./mockRes";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Toast from 'react-bootstrap/Toast';
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const [action,setAction] = useState("Sign Up");
  const [userType,setUserType] = useState('customer');
  const [userInfo,setUserInfo] = useState({userName:'',password:'',email:'',licence:''});
  const [showLogin,setShowLogin]=useState(false);
  const [passwordError,setPasswordError]=useState(false);
  const [accountCreated,setAccountCreated]=useState(false);
  const [loginVerified,setLoginVerified] =useState(false);
  const navigate = useNavigate();

  const setUserDetails = (val,key)=>{
    if(key === 'user_name'){
      setUserInfo({...userInfo,userName:val});
    }else if(key ==='email'){
      setUserInfo({...userInfo,email:val});
    }else if(key ==='password'){
      setUserInfo({...userInfo,password:val});
    }else if(key ==='licence'){
      setUserInfo({...userInfo,licence:val});
    }
  }

  function validatePassword(pw) {

    return /[A-Z]/.test(pw) &&
           /[a-z]/.test(pw) &&
           /[0-9]/.test(pw) &&
           pw.length > 8 && pw.length < 20;
}
  const validateFunction = () =>{
    console.log(userInfo)
    if(action === "Sign Up"){
      const checkPasswordPattern =validatePassword(userInfo.password);
      if(!checkPasswordPattern){
        setPasswordError(true);
        return;
      }else{
        setPasswordError(false);
        const payload ={
          userName: userInfo.userName,
          password: userInfo.password,
          email:userInfo.email,
          licence: userType !== 'customer' ? userInfo.licence : null
        }
        const res = signUp
        if(res.code ===200){
          setAccountCreated(true);
          if(userType === 'customer'){
            setTimeout(() =>{
              navigate("/home")
            },3000)
          }
        }else{
          setAccountCreated(false);
        }
      }
    }else{
      const payload ={
        userName: userInfo.userName,
        password: userInfo.password,
      }
      const response= login;
      if(response.code ===200){
        setLoginVerified(true);
        if(userType === 'customer'){
          setTimeout(() =>{
            navigate("/home")
          },3000)
        }
      }else{
        setLoginVerified(false);
      }
    }
  }
  console.log("showLogin:",showLogin)
  return (
    <>
    {!showLogin && 
     <div className='container-login'>
     <div className="header">
     <h3>Please select an option to Login or Sign up as Driver or Customer</h3>
      <Button variant="primary" onClick={() =>{
        setUserType('customer');
        setShowLogin(true);
      }}>Customer</Button>{' '}
      <Button variant="secondary" onClick={() =>{
        setUserType('driver');
        setShowLogin(true);
      }}>Driver</Button>{' '}
     </div>
    </div>
    }
   
 {showLogin && 
  <div className='container-login'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
            {accountCreated && 
        <>
        <div className="input">
                <Toast
                className="d-inline-block m-1"
                bg='success'
                >
                <Toast.Body className='success'>
                Account has been created
                </Toast.Body>
                </Toast>
          </div>
        </>}
        {loginVerified && 
        <>
        <div className="input">
                <Toast
                className="d-inline-block m-1"
                bg='success'
                >
                <Toast.Body className='success'>
                Your account is validated successfully
                </Toast.Body>
                </Toast>
          </div>
        </>}
        </div>
      <div className ="inputs">
        {action === "Login"?
        <></>:
        <div className="input">
            <img src={user_icon} alt="user" />
            <input type="text" placeholder="Name" id="n1" onChange={e  => setUserDetails(e.target.value,'user_name')} value={userInfo.userName}/>
        </div>}
        <div className="input">
            <img src={email_icon} alt="email" />
            <input type="email" placeholder="email-id" id="n2" onChange={e  => setUserDetails(e.target.value,'email')} value={userInfo.email}/>
        </div>
        <div className="input">
            <img src={password_icon} alt="password" />
            <input type="password" placeholder="password" id="n3" onChange={e  => setUserDetails(e.target.value,'password')} value={userInfo.password}/>
        </div>
        {action ==="Sign Up" && <div className="input">
          <span>Your password must be 8-20 characters long, contain letters and numbers.</span>
        </div>}
        {passwordError && 
        <>
        <div className="input">
                <Toast
                className="d-inline-block m-1"
                bg='danger'
                >
                <Toast.Body className='success'>
                Password entry does not meet criteria
                </Toast.Body>
                </Toast>
          </div>
        </>}
        {action ==="Login" || userType === 'customer'?<></>:        
        <div className="input">
            <img src={driving_icon} alt="Driving license" />
            <input type="number" placeholder="Driving License of rider" id="n4" onChange={e  => setUserDetails(e.target.licence,'licence')} value={userInfo.licence}/>
        </div>}
      </div>
      {action ==="Sign Up"? <></>
      :<div className="forgot-password">Forgot Password ? <span>Click Here</span></div>}
      <div className="submit-container">
      <div className={action==="Login"? "submit gray":"submit"} onClick={()=>{
        setAction("Sign Up")
        setPasswordError(false);
        setUserInfo({...userInfo, userName:'',password:'',email:'',licence:''})
        setLoginVerified(false);
        setAccountCreated(false);
      }}>Sign Up</div>
      <div className={action==="Sign Up"? "submit gray":"submit"} onClick={()=>{
        setAction("Login");
        setPasswordError(false);
        setUserInfo({...userInfo, userName:'',password:'',email:'',licence:''})
        setLoginVerified(false);
        setAccountCreated(false);
      }}>Login</div>  
      </div>
      <div className="final-submit">
      <button class="button button1" onClick={() => validateFunction()}>Submit</button> 
      </div>
    </div>
    }
    </>
  );
}

export default LoginSignup
