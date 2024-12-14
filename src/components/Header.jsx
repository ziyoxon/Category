import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <div className="container">
        {isVisible && (
          <div className="relative flex justify-center items-center bg-[#377DFF] p-2 px-5">
            <div className="flex items-center  space-x-3">
              <img src="src/assets/Vector02.png" alt="vector" />
              <p className="text-white">
                30% off storewide — Limited time! Shop Now
              </p>
              <img src="src/assets/arrow-right.png" alt="arrow-right" />
            </div>
            <img
              className="cursor-pointer"
              src="src/assets/close.png"
              alt="close"
              onClick={() => setIsVisible(false)}
            />
          </div>
        )}

        <div className="flex justify-between items-center p-5 px-10">
          <img
            className="cursor-pointer"
            src="src/assets/Logo.png"
            alt="Logo"
          />
          <div className="flex items-center space-x-8">
            <NavLink
              to={"/"}
              className="text-black text-lg px-4 py-2 rounded-md hover:text-gray-800 transition-all duration-300"
            >
              Home
            </NavLink>
            <NavLink
              to={"/register"}
              className="text-black text-lg px-4 py-2 rounded-md hover:text-gray-800 transition-all duration-300"
            >
              Register
            </NavLink>
            <NavLink
              to={"/login"}
              className="text-black text-lg px-4 py-2 rounded-md hover:text-gray-800 transition-all duration-300"
            >
              Login
            </NavLink>
          </div>

          <div className="flex items-center gap-3">
            <img
              className="cursor-pointer"
              src="src/assets/search.png"
              alt="search"
            />
            <img
              className="cursor-pointer"
              src="src/assets/user-circle.png"
              alt="user"
            />
            <img
              className="cursor-pointer"
              src="src/assets/shopping bag.png"
              alt="shopping bag"
            />
            <img
              className="cursor-pointer"
              src="src/assets/Frame3.png"
              alt="frame"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
