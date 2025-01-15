// src/components/Resources.jsx
import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import './Resources.css'; // Add your custom styling

function Resources() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const resourcesCollection = collection(db, "resources");
        const resourcesSnapshot = await getDocs(resourcesCollection);
        const resourcesList = resourcesSnapshot.docs.map(doc => doc.data());
        setResources(resourcesList);
      } catch (error) {
        console.error("Error fetching resources:", error);
      }
    };

    fetchResources();
  }, []);

  return (
    <div className="resources">
      <h2>Study Resources</h2>
      {resources.length > 0 ? (
        resources.map((resource, index) => (
          <a key={index} href={resource.link} target="_blank" rel="noopener noreferrer">
            {resource.name}
          </a>
        ))
      ) : (
        <p>No resources available.</p>
      )}
    </div>
  );
}

export default Resources;
