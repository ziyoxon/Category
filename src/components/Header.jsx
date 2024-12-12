import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-center items-center bg-gray-800 p-5 space-x-8">
      <NavLink
        to={"/"}
        className="text-white text-lg px-4 py-2 rounded-md hover:bg-blue-500 hover:text-gray-800 transition-all duration-300"
      >
        Home
      </NavLink>
      <NavLink
        to={"/register"}
        className="text-white text-lg px-4 py-2 rounded-md hover:bg-blue-500 hover:text-gray-800 transition-all duration-300"
      >
        Register
      </NavLink>
      <NavLink
        to={"/login"}
        className="text-white text-lg px-4 py-2 rounded-md hover:bg-blue-500 hover:text-gray-800 transition-all duration-300"
      >
        Login
      </NavLink>
      <NavLink
        to={"/findall-category"}
        className="text-white text-lg px-4 py-2 rounded-md hover:bg-blue-500 hover:text-gray-800 transition-all duration-300"
      >
        FindAll Category
      </NavLink>
      <NavLink
        to={"/one-category"}
        className="text-white text-lg px-4 py-2 rounded-md hover:bg-blue-500 hover:text-gray-800 transition-all duration-300"
      >
        FindOne Category
      </NavLink>
    </div>
  );
};

export default Header;
