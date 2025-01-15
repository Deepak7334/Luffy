import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLoginPage from "./components/AdminLoginPage";
import AdminSignupPage from "./components/AdminSignupPage";
import AdminDashboard from "./components/AdminDashboard";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import DashboardPage from "./components/DashboardPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Student Routes */}
        <Route path="/" element={<LoginPage />} /> {/* Student Login Page */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard/*" element={<DashboardPage />} /> {/* Student Dashboard */}

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLoginPage />} /> {/* Admin Login Page */}
        <Route path="/admin/signup" element={<AdminSignupPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} /> {/* Admin Dashboard */}
      </Routes>
    </Router>
  );
}

export default App;
