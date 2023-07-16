import './App.css';
import Form from './components/Form';
import { Routes,BrowserRouter, Route,Navigate } from 'react-router-dom';

function App() {



  return (
    <div className="App">
      <h1>Productivity Tracker</h1>    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to='/signup'/>} />
        <Route path="/signup" element={<Form />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
