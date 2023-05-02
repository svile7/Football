import "./login.scss";
import {getCurrentUserDisplayName, getDisplayNameForPopup} from "../../firebase/firebase";
import {useState, useEffect} from "react";

const Login = () => {
  const [displayName, setDisplayName] = useState(null);
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
    };
    fetchDisplayName();
  }, []);
  return (
    <div className="login">
      <h2>
        Welcome {displayName || displayNamePopup}
        <br></br>
        <br></br> You are sucesffuly logged in
      </h2>
    </div>
  );
};
export const FailedPassword = () => {
  return (
    <div className="fail">
      <h2>Wrong password or email</h2>
    </div>
  );
};
export const SuccesfullyCreatedAcc = () => {
  return (
    <div className="login">
      <h2>Succesfully created account</h2>
    </div>
  );
};

export default Login;
