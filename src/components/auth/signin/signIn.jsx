import {useState, useEffect, createContext, useContext} from "react";
import "./signin.scss";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../../firebase/firebase";
import SignUp from "../signup/signUp";
import Login from "../../login/login";
import {FailedPassword} from "../../login/login";
import {AuthContext} from "../../../context/user-context";
import {getCurrentUserDisplayName, getDisplayNameForPopup} from "../../../firebase/firebase";

const defaultFormFieldssignIn = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFieldssignIn);
  const {email, password} = formFields;

  const [isFalsePassword, setIsFalsePassword] = useState(false);

  const falschPasswordHandler = () => {
    setIsFalsePassword(true);
  };

  const [isLoginAcc, setIsLoginAcc] = useState(false);
  const {setAuth} = useContext(AuthContext);

  const handleSubmitAcc = (event) => {
    setIsLoginAcc(true);
    setAuth(true);
  };
 

  const [isLogin, setIsLogin] = useState(false);
  const loginHandler = () => {
    setIsLogin(true);
  };
  const hideElement = () => {
    setTimeout(() => {
      setIsLogin(false);
      setIsFalsePassword(false);
    }, 3000);
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFieldssignIn);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    loginHandler();
    hideElement();
    handleSubmitAcc();
    getDisplayNameForPopup().then(user => console.log(user.displayName));
    
  };

  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
      loginHandler();
      hideElement();
      await signInAuthUserWithEmailAndPassword(email, password);
      handleSubmitAcc();
      getCurrentUserDisplayName();
    } catch (error) {
      falschPasswordHandler();
      hideElement();
    }
  };

  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFields({...formFields, [name]: value});
  };
  if (isVisible === false) {
    return (
      <div className="auth-container">
        {isLogin && <Login />}

        {isFalsePassword && <FailedPassword />}
        <div className="signIn-container">
          <h2>Already have an account?</h2>
          <span>Sign in with your email and password</span>
          <form className="form-container" onSubmit={handleSubmit}>
            <input
              className="input-email"
              placeholder="Email"
              label="Email"
              type="email"
              required
              onChange={handleChange}
              name="email"
              value={email}
            />

            <input
              className="input-password"
              placeholder="Password"
              label="Password"
              type="password"
              required
              onChange={handleChange}
              name="password"
              value={password}
            />
            <div>
              <button className="btn-submit" type="submit">
                Sign In
              </button>
              <button
                className="btn-google"
                type="button"
                onClick={signInWithGoogle}
              >
                Sign in with Google
              </button>
              <div className="acc-new">
                <span>
                  If you doesn't have an account make new one<br></br>
                  <span onClick={handleClick} className="link">
                    Make new account
                  </span>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  } else if (isVisible === true) return <SignUp />;
};

export default SignInForm;
