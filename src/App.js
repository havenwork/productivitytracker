import './App.css';
import { Routes,BrowserRouter, Route,Navigate } from 'react-router-dom';
import LoginPage from './pages/login';
import SignupForm from './pages/SignupForm';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';


function App() {



  return (
    <div className="App">
      <h1>Productivity Tracker</h1>    
      <BrowserRouter>
      <Routes>
        
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signupForm" element={<SignupForm/>} />
        <Route path="/ForgotPassword" element={<ForgotPassword/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/*" element={<Navigate to='/signupForm'/>} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
