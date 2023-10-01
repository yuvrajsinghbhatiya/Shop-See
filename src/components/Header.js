import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { BsBag, BsList, BsX } from "react-icons/bs"; // BsX is the close icon
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";

const DropdownMenu = () => {
  // Dropdown menu content goes here
  return (
    <div className="bg-fadeCustom absolute right-2 mt-2 p-2 rounded shadow">
      <Link to="#" className="block py-1 text-primary font-medium hover:border-b border-gray-400">Men</Link>
      <Link to="#" className="block py-1 text-primary font-medium hover:border-b border-gray-400">Women</Link>
      <Link to="#" className="block py-1 text-primary font-medium hover:border-b border-gray-400">Kids</Link>
    </div>
  );
};

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track menu open/close state
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  const handleMenuClick = () => {
    setShowDropdown(!showDropdown);
    setIsMenuOpen(!isMenuOpen); // Toggle menu open/close state
  };

  return (
    <header className={`${isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"} fixed w-full z-10 transition-all`}>
      <div className="container mx-auto flex items-center justify-between h-[50px]">
        <Link to={"/"}>
          <div>
            <img className="w-[60px]" src={Logo} alt="" />
          </div>
        </Link>

        {/* Navigation Links for Large Screen */}
        <div className="hidden md:flex space-x-10 tracking-wider">
          <Link
            to="#"
            className="text-primary text-lg py-4 font-medium hover:border-b border-custom"
          >
            Men
          </Link>
          <Link
            to="#"
            className="text-primary text-lg py-4 font-medium hover:border-b border-custom"
          >
            Women
          </Link>
          <Link
            to="#"
            className="text-primary text-lg py-4 font-medium hover:border-b border-custom"
          >
            Kids
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer relative">
            <BsBag className="text-3xl" />
            <div className="bg-custom absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </div>

          {/* Menu Icon (open/close) and Dropdown for Small Screen */}
          <div className="md:hidden">
            {isMenuOpen ? (
              <BsX onClick={handleMenuClick} className="text-primary text-4xl cursor-pointer" />
            ) : (
              <BsList onClick={handleMenuClick} className="text-primary text-4xl cursor-pointer" />
            )}
            {showDropdown && <DropdownMenu />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
