import React, {useState, useContext} from "react";
import "./navbar.css";
import logo from "../logo.svg";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

import Account from "../account/account";
import {AuthContext} from "../../context/user-context";

function Navbar() {
  const navigation = useNavigate();
  const toHomeHandler = () => {
    navigation("/");
  };
  const {isLoginAcc} = useContext(AuthContext);

  //const {isLoginAcc, setIsLoginAcc} = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="links links-left">
        <Link to="/news" className="link">
          News
        </Link>
        <Link to="/shop" className="link">
          Shop
        </Link>
      </div>
      <div onClick={toHomeHandler} className="logo2">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="links links-right">
        <Link to="/aboutus" className="link">
          About Us
        </Link>
        <Link to="/auth" className="link">
          Profile
        </Link>
      </div>
      {isLoginAcc && <Account />}
    </div>
  );
}
export default Navbar;
