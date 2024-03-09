import "./App.css";

import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import ResetPassword from "./pages/ResetPassword";
import FormContainer from "./pages/FormContainer";
import LoginPage from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormContainer />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
          </Route>
          <Route path="/ResetPassword" element={<ResetPassword />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/*" element={<Navigate to="/signup" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
