import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/admin/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>Welcome to Admin Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
      {/* Add admin-specific functionality here */}
    </div>
  );
}

export default AdminDashboard;
