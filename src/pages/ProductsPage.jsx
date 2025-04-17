import React from "react";
import ImageSlider from "../components/ImageSlider";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

import SupportIcon from "../assets/support-icon.png";
import ReturnsIcon from "../assets/returns-icon.png";
import ShippingIcon from "../assets/shipping-icon.png";

import TShirtImage from "../assets/tshirt1.webp";
import BrowseImage from "../assets/BrowseImage.png";

const products = [
  {
    title: "Tshirt",
    category: "Shirt",
    price: 500,
    image: "https://source.unsplash.com/featured/?tshirt,1",
  },
];

const ProductsPage = () => {
  return (
    <>
      <Header />
      <div className="bg-white min-h-screen">
        <ImageSlider />

        {/* Features Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10 px-4 md:px-20 py-10 bg-white">
          <div className="text-center max-w-xs">
            <img
              src={ShippingIcon} // replace with actual file name
              alt="Free Shipping"
              className="mx-auto mb-4 w-14 h-14"
            />
            <h3 className="text-lg font-semibold text-purple-800">
              Free Shipping
            </h3>
            <p className="text-gray-600 text-base mt-1">
              Free shipping on orders above ₹2000
            </p>
          </div>

          <div className="text-center max-w-xs">
            <img
              src={SupportIcon} // replace with actual file name
              alt="24/7 Customer Support"
              className="mx-auto mb-4 w-14 h-14"
            />
            <h3 className="text-lg font-semibold text-purple-800">
              24/7 Customer Support
            </h3>
            <p className="text-gray-600 text-base mt-1">
              Enjoy round-the-clock customer support. Our team is available at
              any hour to aid you.
            </p>
          </div>

          <div className="text-center max-w-xs">
            <img
              src={ReturnsIcon} // replace with actual file name
              alt="Returns and Refunds"
              className="mx-auto mb-4 w-14 h-14"
            />
            <h3 className="text-lg font-semibold text-purple-800">
              Hassle-Free Returns and Refunds
            </h3>
            <p className="text-gray-600 text-base mt-1">
              Simple returns and refunds to make your shopping easier.
            </p>
          </div>
        </div>

        {/* Product Section */}
        <div className="px-4 md:px-20 py-10">
          <h2 className="text-2xl font-bold text-purple-800 mb-6">
            All Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} image={TShirtImage} />
            ))}
          </div>
        </div>

        {/* Shop by Category Section */}
        <div className="px-4 md:px-20 mt-12 pb-10">
          <h2 className="text-2xl font-bold text-purple-800 mb-8">
            Shop by category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Tshirt Category */}
            <div className="bg-gradient-to-t from-gray-800 to-white rounded-lg overflow-hidden shadow-md">
              <img
                src={TShirtImage}
                alt="Tshirt"
                className="w-full h-auto object-cover"
              />
              <div className="p-4 text-center">
                <p className="text-white text-lg font-semibold">Tshirt</p>
              </div>
            </div>

            {/* Browse all categories */}
            <div className="bg-gradient-to-t from-gray-800 to-white rounded-lg overflow-hidden shadow-md flex items-center justify-center flex-col p-4">
              <img
                src="https://via.placeholder.com/100x100.png?text=Image"
                alt="Browse Categories"
                className="w-20 h-20 mb-4"
              />
              <p className="text-white text-lg font-semibold text-center">
                Browse all <br /> categories
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsPage;
