import logo from './logo.svg';
import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import RiderHome from './Components/RiderHome/RiderHome';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div >
      <Router>
      <Routes> 
        <Route path="/" element={<LoginSignup/>} />
        <Route path="/home" element={<RiderHome />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
