import React from "react";

const ProductCard = ({ title, category, price, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden text-center p-4 border border-gray-200">
      <img src={image} alt={title} className="w-full h-auto object-cover mb-4" />
      <h4 className="text-lg font-semibold">{category}</h4>
      <p className="text-gray-700">{title}</p>
      <p className="text-purple-700 font-bold">₹{price}</p>
      <button className="mt-2 bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800">
        Add to Bag
      </button>
    </div>
  );
};

export default ProductCard;
