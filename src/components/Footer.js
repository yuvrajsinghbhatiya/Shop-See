import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-footer py-12">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-primary">
          <a href="/" className="text-primary font-medium mr-4">
            Home
          </a>
          <a href="/" className="text-primary font-medium mr-4">
            About
          </a>
          <a href="/" className="text-primary font-medium">
            Contact
          </a>
        </div>
        <div className="text-white">
          <button onClick={() => {}} className="text-primary mr-4">
            <FaInstagram size={24} />
          </button>
          <button onClick={() => {}} className="text-primary mr-4">
            <FaFacebook size={24} />
          </button>
          <button onClick={() => {}} className="text-primary">
            <FaTwitter size={24} />
          </button>
        </div>
      </div>
      <div className="container mx-auto mt-4">
        <p className="text-primary font-medium text-center">
          Copyright &copy; SHOP SEE 2023. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
