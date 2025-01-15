// src/components/Grades.jsx
import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import './Grades.css'; // Add your custom styling

function Grades() {
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    const fetchGrades = async () => {
      try {
        const gradesCollection = collection(db, "grades");
        const gradesSnapshot = await getDocs(gradesCollection);
        const gradesList = gradesSnapshot.docs.map(doc => doc.data());
        setGrades(gradesList);
      } catch (error) {
        console.error("Error fetching grades:", error);
      }
    };

    fetchGrades();
  }, []);

  return (
    <div className="grades">
      <h2>Your Grades</h2>
      {grades.length > 0 ? (
        grades.map((grade, index) => (
          <div key={index} className="grade">
            <p>{grade.subject}: {grade.grade}</p>
          </div>
        ))
      ) : (
        <p>No grades available.</p>
      )}
    </div>
  );
}

export default Grades;
