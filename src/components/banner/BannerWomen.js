import React from "react";
import { Link } from "react-router-dom";

function BannerWomen({ title, text }) {
  return (
    <div className="banner bg-gray-200 rounded-lg mb-8 mt-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center h-50 overflow-hidden rounded-lg">
        <div className="text-side flex flex-col justify-center items-start p-8 md:p-16 bg-gray-200">
          <div className="text">
            <h2 className="text-3xl md:text-5xl font-semibold mb-6">{title}</h2>
            <p className="text-md md:text-xl mb-10"> {text} </p>
            <Link
              to="/womenproductpage"
              className="bg-black text-white text-md md:text-xl font-semibold py-4 px-8 uppercase border-2 border-black transition duration-150 hover:bg-fadeCustom hover:text-black rounded-lg"
            >
              Show All
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerWomen;
