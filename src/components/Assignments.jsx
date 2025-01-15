// src/components/Assignments.jsx
import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import "./Assignments.css";

import { collection, getDocs } from "firebase/firestore";
import './Assignments.css'; // You can add your custom styling

function Assignments() {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const assignmentsCollection = collection(db, "assignments");
        const assignmentsSnapshot = await getDocs(assignmentsCollection);
        const assignmentsList = assignmentsSnapshot.docs.map(doc => doc.data());
        setAssignments(assignmentsList);
      } catch (error) {
        console.error("Error fetching assignments:", error);
      }
    };

    fetchAssignments();
  }, []);

  return (
    <div className="assignments">
      <h2>Upcoming Assignments</h2>
      {assignments.length > 0 ? (
        assignments.map((assignment, index) => (
          <div key={index} className="assignment">
            <h3>{assignment.title}</h3>
            <p>Due Date: {assignment.dueDate}</p>
          </div>
        ))
      ) : (
        <p>No assignments available.</p>
      )}
    </div>
  );
}

export default Assignments;
