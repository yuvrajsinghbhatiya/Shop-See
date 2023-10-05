import React, { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import Product from "../Product";
import menProductImage from "../../img/productpage/menproduct.webp";

const MenProductPage = () => {
  const { products } = useContext(ProductContext);

  // Filter men's products and limit to 5 items
  const menProducts = products.filter((prod) => prod.category === "men");

  return (
    <>
      <div className="mt-20">
        <div className="banner bg-gray-200 flex items-center justify-between p-7">
          <div className="text-side flex flex-col justify-center items-start p-3">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">
              Discover <span className="text-primary">Men's Fashion</span>
            </h2>
            <p className="text-md md:text-xl mb-8 text-gray-700">
              Our men's collection is a fusion of timeless elegance and modern
              flair. From classic essentials to cutting-edge designs, find your
              style statement crafted with precision and passion.
            </p>
            <button className="bg-black text-white py-2 px-6 rounded-lg text-lg font-semibold">
              Our Exclusive Men's Collection
            </button>
          </div>

          <div className="hidden sm:block w-1/2">
            <img
              src={menProductImage}
              alt="Men Fashion"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              {menProducts.map((product) => (
                <Product product={product} key={product.id} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MenProductPage;
