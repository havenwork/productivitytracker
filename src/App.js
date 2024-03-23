import "./App.css";

import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard/Dashboard";
import ResetPassword from "./pages/ResetPassword";
import FormContainer from "./pages/FormContainer";
import LoginPage from "./pages/Login";
import Signup from "./pages/Signup";
import DashboardContainer from "./pages/Dashboard/DashboardContainer";
import Goal from "./pages/Dashboard/Goal";
import Task from "./pages/Dashboard/Task";
import Setting from "./pages/Dashboard/Setting";
import UpdateGoal from "./pages/Dashboard/UpdateGoal";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormContainer />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
            <Route path="/ResetPassword" element={<ResetPassword />} />
          </Route>

          <Route path="/dashboard" element={<DashboardContainer />}>
            <Route path="/dashboard/user/:id" element={<Dashboard />} />
            <Route path="/dashboard/user/goals" element={<Goal />} />
            <Route
              path="/dashboard/user/goals/update/:goalID"
              element={<UpdateGoal />}
            />
            <Route path="/dashboard/user/tasks" element={<Task />} />
            <Route path="/dashboard/user/setting" element={<Setting />} />
          </Route>

          <Route path="/*" element={<Navigate to="/signup" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
