import './App.css';
import Form from './components/Form';
import { Routes,BrowserRouter, Route,Navigate } from 'react-router-dom';
import LoginPage from './pages/login';
function App() {


//Siddhesh//
  return (
    <div className="App">
      <h1>Productivity Tracker</h1>    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to='/signup'/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Form />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
