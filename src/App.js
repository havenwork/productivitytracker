import './App.css';
import { Routes,BrowserRouter, Route,Navigate } from 'react-router-dom';
import LoginPage from './pages/login';
import SignupForm from './pages/SignupForm';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import ResetPassword from './pages/ResetPassword';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignupForm/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/ForgotPassword" element={<ForgotPassword/>} />
        <Route path="/ResetPassword" element={<ResetPassword/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/*" element={<Navigate to='/signup'/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
