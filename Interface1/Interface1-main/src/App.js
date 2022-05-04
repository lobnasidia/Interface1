import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/index'
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import Navbar from './components/Navbar';
import AboutPage from './pages/about';
import DownloadPage from './pages/download';
import SupportPage from './pages/support';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  return (
    <Router >
     <Navbar />
      <Routes>
          <Route path="/" element={<Home/> } exact />
          <Route path="/about" element={<AboutPage/> }  />
          <Route path="/download" element={<DownloadPage/> }  />
          <Route path="/support" element={<SupportPage/> }  />
          <Route path="/login" element={<LoginPage/>  }  />
          <Route path="/signup" element={<SignupPage/> }  />
          <Route path="/forgot-password" element={<ForgotPassword/> }  />
          
      </Routes>
    </Router>
  
  );
}

export default App;
