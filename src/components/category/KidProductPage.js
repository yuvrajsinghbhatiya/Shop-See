import React, { useContext, useState } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import Product from "../Product";
import kidsProductImage from "../../img/productpage/kidproduct.webp";

const KidsProductPage = () => {
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
    return sorted.filter((prod) => prod.category === "kid");
  };
  return (
    <div className="mt-20">
      <div className="py-8 mx-4 border rounded-lg text-center">
  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
    Kids Wear
  </h2>
  <div className="flex justify-between">
    <div className="w-1/3 rounded-lg overflow-hidden">
      <img
        src={kidsProductImage}
        alt="Kids Fashion"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="w-1/3 rounded-lg overflow-hidden">
      <img
        src={kidsProductImage}
        alt="Kids Fashion"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="w-1/3 rounded-lg overflow-hidden">
      <img
        src={kidsProductImage}
        alt="Kids Fashion"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>

      <div className="mt-32 py-8 px-6 flex items-center space-x-4">
        <span>Sort By: </span>
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

      <section className="mt-8">
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

export default KidsProductPage;
