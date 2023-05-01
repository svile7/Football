import "./account.css";
import React, {useState, useEffect} from "react";
import Dropdown from "../dropdown.png";
import {
  getCurrentUserDisplayName,
  signOutUser,
  onAuthStateChangedListener,
} from "../../firebase/firebase";

const Account = () => {
  const [displayName, setDisplayName] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchDisplayName = async () => {
      const displayName = await getCurrentUserDisplayName();
      setDisplayName(displayName);
    };
    fetchDisplayName();
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    try {
      await signOutUser();
      window.location.reload();
      setCurrentUser(null);
    } catch (error) {
      console.log("Error logging out:", error);
    }
  };

  return (
    <div className="dropdown">
      <img src={Dropdown} className="dropbtn"></img>
      <div className="dropdown-content">
        <a className="dispalyName" href="#">
          {displayName}
        </a>

        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Account;
