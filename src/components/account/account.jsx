import "./account.css";
import React, {useState, useEffect} from "react";
import Dropdown from "../dropdown.png";
import {
  getCurrentUserDisplayName,
  getDisplayNameForPopup,
  signOutUser,
  onAuthStateChangedListener,
} from "../../firebase/firebase";

const Account = () => {
  const [displayName, setDisplayName] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [displayNamePopup, setDisplayNamePopup] = useState(null)

  useEffect(() => {
    const fetchDisplayNamePopup = async () => {
      const displayNamePopup = await getDisplayNameForPopup();
      setDisplayNamePopup(displayNamePopup);
     
    };
    fetchDisplayNamePopup();
  }, []);

  useEffect(() => {
    const fetchDisplayName = async () => {
      const displayName = await getCurrentUserDisplayName();
      setDisplayName(displayName);
     // console.log(displayName);
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

  const renderDisplayName = () => {
    if (displayName && !displayNamePopup) {
      return (
        <a className="dispalyName" href="#">
          {displayName}
        </a>
      );
    } else if (displayNamePopup && !displayName) {
      return (
        <a className="dispalyName" href="#">
          {displayNamePopup}
        </a>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="dropdown">
      <img src={Dropdown} className="dropbtn"></img>
      <div className="dropdown-content">
        {renderDisplayName()}
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Account;
