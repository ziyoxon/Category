import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Home from "../pages/home/Home";
import Login from "../pages/register/Login";
import Register from "../pages/register/Register";
import Admin from "../pages/admin/Admin";
import Auth from "../pages/auth/Auth";
import Create from "@/pages/admin/create-product/Create-product";
import Manage from "@/pages/admin/manage-product/Manage-product";
import Categorry from "@/pages/admin/create-category/Create-category.product";
import AllCateg from "@/pages/admin/create-category/findAllCate";
import FindOneCateg from "@/pages/admin/create-category/findOne";
import Section from "@/components/Section";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="/" element={<Auth />}>
        <Route path="admin" element={<Admin />}>
          <Route path="create-product" element={<Create />} />
          <Route path="manage-product" element={<Manage />} />
          <Route path="categorry" element={<Categorry />} />
          <Route path="all-categorry" element={<AllCateg />} />
          <Route path="one-category/get/:id" element={<FindOneCateg />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
