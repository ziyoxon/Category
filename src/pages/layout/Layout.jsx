import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4 bg-gray-300 min-h-screen">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
