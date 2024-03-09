import { useState } from "react";
//import logo from './logo.svg';
//import './App.css';
import { FaStar }  from "react-icons/fa";
import Toast from 'react-bootstrap/Toast';
import { response } from "./mockData";
const colors = {
orange:"#FFA500",
grey:"#808080"
}


function Feedback() {
 const stars = Array(5).fill(0);
 const [currentValue, setCurrentValue] = useState(0);
 const [hoverValue,setHoverValue] = useState(undefined);
 const [comment,setComment] = useState('');
 const [showToast,setShowToast] =useState(false);
const handleClick = value =>{
  setCurrentValue(value)
};

const handleMouseOver = newHoverValue =>{
  setHoverValue(newHoverValue)
};

const handleMouseLeave = () =>{
  setHoverValue(undefined)
}

console.log("comment:",comment,"hoverValue:",hoverValue,"currentValue:",currentValue)
const submitFeedBack = () =>{
  const payload = {
    starsCount:currentValue,
    comment:comment
  }
  const res = response
  if(response?.code === 200 && response?.status === 'success'){
    setShowToast(true);
  }
}

  return (
      <div style={styles.container}>
         
        <h2>User Feedback</h2>
        {!showToast && 
        <>
        <div style={styles.stars}>
         {stars.map((_,index) => {
           return (
             <FaStar
                key={index}
                size={24}
                style={{
                  marginRight : 10,
                  cursor:"pointer"
                }}
                color = {(hoverValue || currentValue)>index ? colors.orange : colors.grey}
                onClick={()=> handleClick(index + 1 )}
                onMouseOver={()=>handleMouseOver(index+1)}
                onMouseLeave={handleMouseLeave}
              />
           )
         })}
        </div>
        <textarea
            placeholder = "Whats your Feedback"
            onChange={(e) => setComment(e.target.value)}
            style={styles.textarea}
        />
        <button style={styles.button} onClick={() => submitFeedBack()}> Submit
        </button>
        </>}

        {showToast && <Toast
                className="d-inline-block m-1"
                bg='success'
                >
                <Toast.Body className='success'>
                Your feedback has been recorded
                </Toast.Body>
                </Toast>
                }
        </div>


  )
}

const styles = {
   container : {
     display:"flex",
     flexDirection:"column",
     alignItems:"center",
   },
   textarea:{
     border: "1px solid #a9a9a9",
     borderRadius : 5,
     width: 300,
     margin:"20px 0",
     minHeight: 100,
     padding: 10
   },
   button:{
     border: "1px solid #a9a9a9",
     borderRadius : 5,
     width: 300,
     padding: 10
   }
};

export default Feedback;
