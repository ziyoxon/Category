import React from "react";

const Products = ({ data }) => {
  const productItems = data?.map((product) => (
    <div
      key={product.id}
      className="w-80 p-3 border border-gray-300 rounded-lg hover:shadow-lg transition-shadow duration-300"
    >
      <img
        src={product.image}
        className="w-full h-60 object-cover rounded-t-lg hover:opacity-80 transition-opacity duration-300"
        alt="src/assets/girl.jpg"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600">{product.price} USD</p>
      </div>
    </div>
  ));

  return (
    <div className="flex gap-6 flex-wrap container mx-auto">{productItems}</div>
  );
};

export default Products;
