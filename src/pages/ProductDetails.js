import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
      </section>
    );
  }

  const { title, price, description, image } = product;

  return (
    <section className="min-h-screen flex justify-center items-center py-10">
      <div className="container mx-auto p-4">
        <div className="lg:flex bg-white rounded-lg  p-8">
          {/* Left Column */}
          <div className="lg:w-1/2 mb-4 lg:mb-0 flex justify-center">
            <img
              className="max-w-[300px] w-full h-auto"
              src={image}
              alt={title}
            />
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2 flex flex-col justify-center p-8 bg-gray-200 rounded-lg">
            <h1 className="text-3xl font-bold mb-6">{title}</h1>
            <div className="text-xl text-custom font-medium mb-6 pl-3">
              ₹ {price}.00
            </div>
            <p className="mb-8">{description}</p>
            <div className="flex  lg:justify-start lg:items-center items-center justify-center mb-4">
              <button
                onClick={() => addToCart(product, product.id)}
                className="bg-primary py-2 px-4 text-white font-medium rounded-lg border-2 border-black transition duration-150 hover:bg-fadeCustom hover:text-black"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
