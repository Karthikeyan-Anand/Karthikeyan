import LOGO_URL from "../utility";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div id="head" className="head">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div id="title" className="title">
        <h1>உணவே மருந்து!!</h1>
      </div>
      <div id="nav-bar" className="nav-bar">
        <ul id="ul" className="ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/body">About</Link>
          </li>
          <li>
            <Link to="/offer">Offer</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>
          <li onClick={handleLogin}>{isLoggedIn ? "Logout" : "Login"}</li>
        </ul>
      </div>
    </div>
  );
};
