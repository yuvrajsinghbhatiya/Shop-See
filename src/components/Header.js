import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-white py-6 shadow-md"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-[40px]">
        <Link to={"/"}>
          <div>
            <img className="w-[130px] md:w-[160px]" src={Logo} alt="" />
          </div>
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link to={"/"} className="text-xl font-normal uppercase">
            Home
          </Link>
          <Link to={"/category"} className="text-xl font-normal uppercase">
            Categories
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer relative"
          >
            <BsBag className="text-2xl" />
            <div className="bg-custom absolute -right-2 -bottom-2 text-xs w-5 h-5 text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
