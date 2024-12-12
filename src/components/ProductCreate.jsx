import { request } from "@/api";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ProductCreate = () => {
  const token = useSelector((s) => s.token.value);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    request.get("/product-category/get").then((res) => {
      setCategories(res.data);
    });
  }, []);

  const handleCreateProduct = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    const product = Object.fromEntries(formData);

    product.price = +product.price;
    product.categoryId = +product.categoryId;
    product.stock = +product.stock;
    product.average_rating = 0;

    request.post("/product/create", product, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <p className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Create Product
        </p>
        <form onSubmit={handleCreateProduct} className="space-y-4">
          <div>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              name="name"
              placeholder="Product Name"
              required
            />
          </div>
          <div>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              name="description"
              placeholder="Product Description"
              rows="4"
              required
            ></textarea>
          </div>
          <div>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="number"
              name="price"
              placeholder="Price"
              required
            />
          </div>
          <div>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              name="image"
              placeholder="Image URL"
              required
            />
          </div>
          <div>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              name="categoryId"
              required
            >
              <option value="" disabled selected>
                Select Category
              </option>
              {categories?.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="number"
              name="stock"
              placeholder="Stock Quantity"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductCreate;
