import React, { useContext, useState } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import Product from "../Product";
import womenProductImage from "../../img/productpage/womenproduct.webp";

const WomenProductPage = () => {
  const { products } = useContext(ProductContext);
  const [sortBy, setSortBy] = useState("default");

  const sortProducts = (type) => {
    setSortBy(type);
  };

  const sortedProducts = () => {
    let sorted = [...products];
    if (sortBy === "highToLow") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortBy === "lowToHigh") {
      sorted.sort((a, b) => a.price - b.price);
    }
    return sorted.filter((prod) => prod.category === "women");
  };
  return (
    <div className="mt-20">
      <div className="banner bg-gray-200 flex items-center justify-between p-8">
        <div className="text-side flex flex-col justify-center items-start p-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Explore <span className="text-primary">Women's Fashion</span>
          </h2>
          <p className="text-lg md:text-xl mb-6 text-gray-700">
            Embrace the essence of femininity and style with our women's
            collection. Discover a wide range of outfits, from timeless classics
            to the latest trends, designed to empower and inspire.
          </p>
          <button className="bg-black text-white py-2 px-6 rounded-lg text-lg font-semibold">
            Our Exclusive Women's Collection
          </button>
        </div>

        <div className="hidden sm:block w-1/2">
          <img
            src={womenProductImage}
            alt="Women Fashion"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      <div className="py-4 px-6 flex items-center space-x-4">
        <span>Sort By:</span>
        <select
          className="border rounded p-2"
          onChange={(e) => sortProducts(e.target.value)}
          value={sortBy}
        >
          <option value="default">Default</option>
          <option value="highToLow">Price High to Low</option>
          <option value="lowToHigh">Price Low to High</option>
        </select>
      </div>

      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {sortedProducts().map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WomenProductPage;
