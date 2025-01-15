import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Profile from "./Profile";
import Assignments from "./Assignments";
import StudyCalendar from "./StudyCalendar";
import Grades from "./Grades";
import Resources from "./Resources";
import "./DashboardPage.css";

function DashboardPage() {
  return (
    <div className="dashboard">
      {/* Navigation Bar */}
      <nav className="navbar">
        <h2>Student Dashboard</h2>
        <ul className="nav-links">
          <li>
            <NavLink
              to="profile"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="assignments"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Assignments
            </NavLink>
          </li>
          <li>
            <NavLink
              to="calendar"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Study Calendar
            </NavLink>
          </li>
          <li>
            <NavLink
              to="grades"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Grades
            </NavLink>
          </li>
          <li>
            <NavLink
              to="resources"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Resources
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Main Content Area */}
      <div className="content">
        <Routes>
          <Route path="profile" element={<Profile />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="calendar" element={<StudyCalendar />} />
          <Route path="grades" element={<Grades />} />
          <Route path="resources" element={<Resources />} />
        </Routes>
      </div>
    </div>
  );
}

export default DashboardPage;
