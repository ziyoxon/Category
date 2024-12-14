import React from "react";
import { NavLink, Outlet, useParams, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Admin = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div id="admin" className="flex">
      <div className="w-80 h-screen sticky top-0 left-0 bg-slate-900 p-6 text-white">
        <p className="cursor-pointer" onClick={handleHomeClick}>
          <FaHome size={24} />
        </p>
        <p className="text-2xl font-medium">Dashboard</p>
        <ul className="mt-10">
          <li>
            <NavLink
              className="block p-3 rounded-md mb-2"
              to={"create-product"}
            >
              <span>Create Product</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="block p-3 rounded-md mb-2"
              to={"manage-product"}
            >
              <span>Manage Product</span>
            </NavLink>
            <NavLink className="block p-3 rounded-md mb-2" to={"categorry"}>
              <span>Create Category</span>
            </NavLink>
            <NavLink className="block p-3 rounded-md mb-2" to={"all-categorry"}>
              <span>Manage Category</span>
            </NavLink>

            <NavLink
              className="block p-3 rounded-md mb-2"
              to={`one-category/get/${id}`}
            >
              <span>One Category</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
