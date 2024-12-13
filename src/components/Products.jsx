import React, { useEffect, useState } from "react";
import { request } from "../api";
import { useSelector } from "react-redux";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = useSelector((state) => state.token.value);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await request.get("/product/get");
        setProducts(res.data);
      } catch (err) {
        alert("Xatolik mahsulotlarni ko'rishda");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      if (confirm("Do you really want to delete this product? Are you sure?")) {
        const res = await request.delete(`/product/delete/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res.data);
        alert("You successfully deleted the product");
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== id)
        );
      }
    } catch (err) {
      alert("Xatolik mahsulotni o'chirishda xatolik");
      console.error(err.response.data);
    }
  };

  const handleEditProducts = (id) => {
    try {
      if (id) {
        return navigate(`/product/create${id}`);
      }
    } catch (error) {
      alert("Xatolik kategoriyani o'chirishda xatolik");
    }
  };

  const productItems = products.map((product) => (
    <div
      key={product.id}
      className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center mb-4 w-80"
    >
      <img
        src={product.image || "https://via.placeholder.com/150"}
        className="w-full h-60 object-cover rounded-t-lg hover:opacity-80 transition-opacity duration-300"
        alt={product.name}
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 mt-2">{product.price} USD</p>
      </div>
      <div className="flex gap-5 mt-4">
        <button
          onClick={() => handleDelete(product.id)}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition duration-300"
        >
          Delete
        </button>
        <button
          onClick={() => handleEditProducts(product.id)}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-300"
        >
          Edit
        </button>
      </div>
    </div>
  ));

  return (
    <section className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-700">
          All Products
        </h1>

        {loading ? (
          <div className="text-center text-gray-500 text-2xl">
            <h2>Loading...</h2>
          </div>
        ) : products.length > 0 ? (
          <div className="flex gap-6 flex-wrap justify-center">
            {productItems}
          </div>
        ) : (
          <div className="text-center text-gray-500 text-2xl">
            <h2>No products available</h2>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
