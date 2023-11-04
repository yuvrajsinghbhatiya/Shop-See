import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../contexts/CartContext"; 

const CheckoutPage = () => {
  const { cart, total, clearCart } = useContext(CartContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const initialState = {
    name: "",
    contact: "",
    cardNumber: "",
    address: "",
    state: "",
    paymentMethod: "Credit Card", 
  };

  const [paymentInfo, setPaymentInfo] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handlePayment = () => {

    if (!paymentInfo.name || !paymentInfo.contact || !paymentInfo.address) {
      alert("Please fill out all required fields.");
      return;
    }
  
    const contactPattern = /^\d{10}$/;
    if (!contactPattern.test(paymentInfo.contact)) {
      alert("Please enter a valid 10-digit contact number.");
      return;
    }

    
    alert("Feature coming soon!!!!!");
    clearCart();
    setPaymentInfo(initialState);
    window.location.href = "/";
  };


  return (
    <div className="container mx-auto my-8 mt-[8rem] mb-16 flex flex-col lg:flex-row lg:gap-8">
      {/* Left Side: List of Items and Total  */}
      <div className="flex-1 bg-gray-200 p-4 rounded-lg max-h-96 overflow-y-auto ">
        <h2 className="text-2xl font-semibold mb-4 uppercase">Order Summary</h2>
        <div className="overflow-x-auto mt-[2rem]">
          <table className="w-full lg:min-w-max bg-white border-collapse border rounded-lg">
            <thead>
              <tr className="bg-gray-300 item-start">
                <th className="p-2">Item</th>
                <th className="p-2">Price</th>
                <th className="p-2">Quantity</th>
                <th className="p-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="text-md">
                  <td className="p-[0.2]">
                    <div className="flex items-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-8 h-10 object-cover mr-2"
                      />
                      {item.title}
                    </div>
                  </td>
                  <td className="p-[0.2]">₹ {item.price.toFixed(2)}</td>
                  <td className="p-[0.2]">{item.amount}</td>
                  <td className="p-[0.2]">
                  ₹ {(item.price * item.amount).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <hr className="my-4 border-t border-gray-500" />
        <div className="flex justify-between items-center">
          <span className="font-semibold text-lg">Total:</span>
          <span className="bg-gray-300 text-lg font-semibold p-2 rounded-lg">₹ {total.toFixed(2)}</span>
        </div>
      </div>

      {/* Right Side:  Payment Form*/}
      <br/>
      <div className="flex-1 mb-8 lg:mb-0 bg-gray-200 p-4 rounded-lg">
        <h2 className="text-2xl font-semibold mb-5 uppercase">Payment Information</h2>
        <div className="mb-5 mt-[2rem]">
          <label className="block text-lg font-normal text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={paymentInfo.name}
            onChange={handleInputChange}
            className="p-2 w-full border rounded-lg"
            placeholder="Enter your name ..."
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-normal text-gray-700">
            Contact
          </label>
          <input
            type="text"
            name="contact"
            value={paymentInfo.contact}
            onChange={handleInputChange}
            className="p-2 w-full border rounded-lg"
            placeholder="+91  ____ ____ __"

          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-normal text-gray-700">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={paymentInfo.address}
            onChange={handleInputChange}
            className="p-2 w-full border rounded-lg"
            placeholder="Area / Pin Code / Landmark"
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-normal text-gray-700">
            State
          </label>
          <input
            type="text"
            name="state"
            value={paymentInfo.state}
            onChange={handleInputChange}
            className="p-2 w-full border rounded-lg"
            placeholder="Enter your state ..."

          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-normal text-gray-700">
            Payment Method
          </label>
          <select
            name="paymentMethod"
            value={paymentInfo.paymentMethod}
            onChange={handleInputChange}
            className="p-2 w-full border rounded-lg"
          >
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="Google Pay">Google Pay</option>
            <option value="UPI">UPI</option>
          </select>
        </div>
        <button
          onClick={handlePayment}
          className="bg-primary text-white py-2 px-4 rounded-lg border-2 border-black transition duration-150 hover:bg-fadeCustom hover:text-black mt-4 w-full text-center lg:w-auto"
        >
          Pay
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;