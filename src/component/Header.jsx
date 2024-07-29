import { LOGO_URL } from "../utilities/URL.js";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./Customhooks/useOnlineStatus.jsx";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store)=> store.cart.items||[]);
  console.log(cartItems);

  return (
    <div className="flex bg-white justify-between items-center ">
      <div className="px-10 ">
        <img className="w-20 " src={LOGO_URL} />
      </div>
      <div className=" flex font-bold justify-between items-center shadow-black mx-12 ">
        <h1 className="mx-12 px-20">ஊன்</h1>
        <ul className="flex justify-between ">
          <li className="px-5">OnlineStatus:{onlineStatus ? "✅" : "⛔"}</li>
          <li className="px-5">
            <Link to="/home">Home</Link>
          </li>
          <li className="px-5">
            <Link to="/about">About</Link>
          </li>
          <li className="px-5">
            <Link to="/offer">Offer</Link>
          </li>
          <li className="px-5">
            <Link to="/cart">Cart({cartItems ? cartItems.length:"0"})</Link>
          </li>
          <li className="px-5">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-5" onClick={handleLogin}>
            {isLoggedIn ? "Logout" : "Login"}
          </li>
        </ul>
      </div>
    </div>
  );
};
 
export default Header;