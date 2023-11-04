import React, { useState } from "react";
import Product from "../components/Product";
import items from "../components/AllData";

const Categories = () => {
  const [category, setCategory] = useState("all");

  const filteredItems =
    category === "all"
      ? items
      : items.filter((item) => item.category === category);

  const handleFilter = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  let heading = "All";
  if (category === "men") {
    heading = "Mens";
  } else if (category === "women") {
    heading = "Womens";
  } else if (category === "kid") {
    heading = "Kids";
  }

  return (
    <div className="container mx-auto mt-36 mb-20 text-center">
      <div className="flex items-center mb-16 justify-center">
        <h1 className="text-3xl font-semibold mx-auto uppercase">{heading}</h1>
      </div>
      <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 mb-12 md:mb-12 text-md">
        <button
          className={`border-2 border-neutral-500 px-4 pb-[4px] pt-1 ${
            category === "all" && "active"
          }`}
          onClick={() => handleFilter("all")}
        >
          All
        </button>
        <button
          className={`border-2 border-neutral-500 px-4 pb-[4px] pt-1  ${
            category === "men" && "active"
          }`}
          onClick={() => handleFilter("men")}
        >
          Men
        </button>
        <button
          className={`border-2 border-neutral-500 px-4 pb-[4px] pt-1  ${
            category === "women" && "active"
          }`}
          onClick={() => handleFilter("women")}
        >
          Women
        </button>
        <button
          className={`border-2 border-neutral-500 px-4 pb-[4px] pt-1  ${
            category === "kid" && "active"
          }`}
          onClick={() => handleFilter("kid")}
        >
          Kid
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {filteredItems.map((product) => (
          <div key={product.id} className="px-5 mb-8">
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
