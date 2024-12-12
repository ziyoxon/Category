import ProductCreate from "@/components/ProductCreate";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div id="admin" className="flex">
      <div className=" w-80 h-screen bg-slate-900 p-6 text-white">
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
            <NavLink
              className="block p-3 rounded-md mb-2"
              to={"categorry"}
            >
              <span>Create Category</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-6 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
