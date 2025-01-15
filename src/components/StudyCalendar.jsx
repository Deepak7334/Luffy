// src/components/Calendar.jsx
import React from "react";
import "react-calendar/dist/Calendar.css";

import Calendar from "react-calendar"; // Install react-calendar using npm install react-calendar
import 'react-calendar/dist/Calendar.css'; // Style for calendar

function StudyCalendar() {
  return (
    <div className="calendar">
      <h2>Your Study Calendar</h2>
      <Calendar />
    </div>
  );
}

export default StudyCalendar;
