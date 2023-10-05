import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";
import BannerMen from "../components/banner/BannerMen";
import BannerWomen from "../components/banner/BannerWomen";
import BannerKid from "../components/banner/BannerKid";

const Home = () => {
  const { products } = useContext(ProductContext);

  // Filter products based on category
  const menProducts = products.filter((prod) => prod.category === "men").slice(0, 5);
  const womenProducts = products.filter((prod) => prod.category === "women").slice(0, 5);
  const kidProducts = products.filter((prod) => prod.category === "kid").slice(0, 5);

  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <BannerMen
            title="Men's Wear"
            text="Upgrade your wardrobe with our exclusive men's clothing collection. Explore timeless classics and contemporary essentials, meticulously crafted for the modern man."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {menProducts.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>

          <hr className="my-12 border-t-2 border-fadeCustom" /> 

          <BannerWomen
            title="Women's Wear"
            text="Indulge in our women's clothing collection, designed to enhance your elegance. Discover a blend of timeless pieces and contemporary fashion."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {womenProducts.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>

          <hr className="my-12 border-t-2 border-fadeCustom" />

          <BannerKid
            title="Kids' Wear"
            text="Dress your little ones in style with our adorable kids' clothing collection. Explore playful designs and comfortable outfits, ensuring your kids look charming on every occasion."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {kidProducts.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
