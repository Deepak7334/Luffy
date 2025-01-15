import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { getDatabase, ref, get, set } from "firebase/database";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState(null);
  const [profileData, setProfileData] = useState({
    dob: "",
    address: "",
  });
  const [editMode, setEditMode] = useState(false); // Toggle for edit mode

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);

      // Fetch additional profile data from Realtime Database
      const db = getDatabase();
      const userRef = ref(db, `users/${currentUser.uid}`);
      get(userRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            setProfileData(snapshot.val());
          } else {
            console.log("No profile data found!");
          }
        })
        .catch((error) => {
          console.error("Error fetching profile data:", error);
        });
    }
  }, []);

  // Function to update profile data
  const handleSave = () => {
    if (user) {
      const db = getDatabase();
      const userRef = ref(db, `users/${user.uid}`);
      set(userRef, profileData)
        .then(() => {
          console.log("Profile updated successfully!");
          setEditMode(false); // Exit edit mode
        })
        .catch((error) => {
          console.error("Error updating profile:", error);
        });
    }
  };

  return (
    <div className="profile">
      <h2>Profile</h2>
      {user ? (
        <div>
          {!editMode ? (
            <div>
              <p>
                <strong>Name:</strong> {user.displayName}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Date of Birth:</strong> {profileData.dob || "Not provided"}
              </p>
              <p>
                <strong>Address:</strong> {profileData.address || "Not provided"}
              </p>
              <button onClick={() => setEditMode(true)}>Edit Profile</button>
            </div>
          ) : (
            <div>
              <label>
                <strong>Date of Birth:</strong>
                <input
                  type="date"
                  value={profileData.dob}
                  onChange={(e) =>
                    setProfileData({ ...profileData, dob: e.target.value })
                  }
                />
              </label>
              <br />
              <label>
                <strong>Address:</strong>
                <input
                  type="text"
                  value={profileData.address}
                  onChange={(e) =>
                    setProfileData({ ...profileData, address: e.target.value })
                  }
                />
              </label>
              <br />
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setEditMode(false)}>Cancel</button>
            </div>
          )}
        </div>
      ) : (
        <p>No user logged in.</p>
      )}
    </div>
  );
}

export default Profile;
