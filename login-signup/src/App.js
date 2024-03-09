import logo from './logo.svg';
//import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import RiderHome from './Components/RiderHome/RiderHome';
import Home from './Components/Home/Home';
import Feedback from './Components/FeedBack/FeedBack';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<LoginSignup/>} />
        <Route path="/home" element={<RiderHome />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
