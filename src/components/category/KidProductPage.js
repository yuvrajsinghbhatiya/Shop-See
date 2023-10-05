import React, { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import Product from "../Product";
import kidsProductImage from "../../img/productpage/kidproduct.webp";

const KidsProductPage = () => {
  const { products } = useContext(ProductContext);

  const kidProducts = products.filter((prod) => prod.category === "kid");


  return (
    <div className="mt-20">
      <div className="banner bg-gray-200 flex items-center justify-between p-8">
        <div className="text-side flex flex-col justify-center items-start p-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Discover <span className="text-primary">Kids' Fashion</span>
          </h2>
          <p className="text-md md:text-xl mb-6 text-gray-700">
            Let your little ones shine with our adorable kids' collection. From
            playtime to parties, find stylish and comfortable outfits designed
            to bring smiles and joy.
          </p>
          <button className="bg-black text-white py-2 px-6 rounded-lg text-lg font-semibold">
          Our Exclusive Kid's Collection
            </button>
        </div>

        <div className="hidden sm:block w-1/2">
          <img
            src={kidsProductImage}
            alt="Kids Fashion"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {kidProducts.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default KidsProductPage;
