import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../components/CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  const cartIsEmpty = cart.length === 0;

  const handleCheckoutClick = () => {
    handleClose(); 
  };

  return (
    <Link
      to="/"
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({itemAmount})
        </div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
        <div className="flex flex-col gap-y-3 py-4 mt-4">
          {cartIsEmpty ? (
            <div className="text-center text-gray-500">
              Cart is empty. Add items to continue shopping.
            </div>
          ) : (
            <div className="flex w-full justify-between items-center">
              <div className="uppercase font-semibold">
                <span className="mr-2">Total:</span>₹{" "}
                {parseFloat(total).toFixed(2)}
              </div>
              <div
                onClick={clearCart}
                className="cursor-pointer py-4 bg-black text-white w-12 h-12 flex justify-center items-center text-xl border-2 border-black transition duration-150 hover:bg-fadeCustom hover:text-black rounded-lg"
              >
                <FiTrash2 />
              </div>
            </div>
          )}
          {!cartIsEmpty && (
            <Link
              to="/checkout"
              onClick={handleCheckoutClick}
              className="bg-primary flex p-4 justify-center items-center text-white w-full font-medium border-2 border-black transition duration-150 hover:bg-fadeCustom hover:text-black rounded-lg"
            >
              Checkout
            </Link>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Sidebar;
