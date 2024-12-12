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
import Category from "@/pages/category/Category";
import AllCategories from "@/pages/category/FindAllCategory";
import OneCategory from "@/pages/category/FindOneCategory";
import Categorry from "@/pages/admin/create-category/Create-category.product";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-category" element={<Category />} />
        <Route path="/findall-category" element={<AllCategories />} />
        <Route path="/one-category" element={<OneCategory />} />
      </Route>
      <Route path="/" element={<Auth />}>
        <Route path="admin" element={<Admin />}>
          <Route path="create-product" element={<Create />} />
          <Route path="manage-product" element={<Manage />} />
          <Route path="categorry" element={<Categorry />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
