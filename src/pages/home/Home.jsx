import { request } from "@/api";
import Products from "@/components/Products";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    request.get("/product/get").then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">
          Welcome to Our Store
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Browse through our amazing products
        </p>
        <div className="grid  gap-8">
          <Products data={products} />
        </div>
      </div>
    </div>
  );
};

export default Home;
